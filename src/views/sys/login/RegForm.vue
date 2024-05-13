<template>
  <div>

    <h2 class="mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left">
      {{ t('sys.login.signUpFormTitle') }}
    </h2>

    <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">

      <FormItem name="account" class="enter-x">
        <Input
          class="fix-auto-fill"
          size="large"
          v-model:value="formData.account"
          placeholder="社团名称"
        />
      </FormItem>

      <FormItem name="mobile" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.mobile"
          :placeholder="t('sys.login.mobile')"
          class="fix-auto-fill"
        />
      </FormItem>

      <FormItem name="sms" class="enter-x">
        <CountdownInput
          size="large"
          class="fix-auto-fill"
          v-model:value="formData.sms"
          :sendCodeApi="handSendCode"
          :placeholder="t('sys.login.smsCode')"
        />
      </FormItem>

      <FormItem name="password" class="enter-x">
        <StrengthMeter
          size="large"
          v-model:value="formData.password"
          :placeholder="t('sys.login.password')"
        />
      </FormItem>

      <FormItem name="confirmPassword" class="enter-x">
        <InputPassword
          size="large"
          visibilityToggle
          v-model:value="formData.confirmPassword"
          :placeholder="t('sys.login.confirmPassword')"
        />
      </FormItem>

      <FormItem class="enter-x" name="policy">
        <!-- No logic, you need to deal with it yourself -->
        <Checkbox v-model:checked="formData.policy" size="small">
          {{ t('sys.login.policy') }}
        </Checkbox>
      </FormItem>

      <Button
        type="primary"
        class="enter-x"
        size="large"
        block
        @click="handleRegister"
        :loading="loading"
      >
        {{ t('sys.login.registerButton') }}
      </Button>

      <Button size="large" block class="mt-4 enter-x" @click="handleBack">
        {{ t('sys.login.backSignIn') }}
      </Button>

    </Form>
  </div>
</template>
<script lang="ts" setup>
  import { reactive, ref, unref, computed } from 'vue';
  import { Form, Input, Button, Checkbox } from 'ant-design-vue';
  import { StrengthMeter } from '/@/components/StrengthMeter';
  import { CountdownInput } from '/@/components/CountDown';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useLoginState, useFormRules, useFormValid, LoginStateEnum } from './useLogin';
  import { router } from '/@/router';
  import { smsApi } from '/@/api/sys/user';
  import { defHttp } from '/@/utils/http/axios';

  const FormItem = Form.Item;
  const InputPassword = Input.Password;
  const { t } = useI18n();

  const formRef = ref();
  const loading = ref(false);

  const formData = reactive({
    account: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    sms: '',
    policy: false,
  });

  const { getFormRules } = useFormRules(formData);
  const { validForm } = useFormValid(formRef);

  import { useMessage } from '/@/hooks/web/useMessage';
  const { notification, createErrorModal } = useMessage();


  async function handleRegister() {
    const data = await validForm();
    if (!data) return;
    console.log(data);

    if (data.password !== data.confirmPassword) {
      notification.error({
          message: '错误',
          description: "两次密码不一致",
          duration: 3,
        });

      return
    }

    if (!data.sms || !data.mobile || !data.account || !data.policy) {
      notification.error({
          message: '错误',
          description: "必须输入社团名称、手机号和验证码，同意注册协议",
          duration: 3,
        });
      return
    }


    try{

      let ret = await defHttp.post(
      {
        url: '/reg_group',
        data,
      },
      {
        errorMessageMode: 'modal',
      });

      notification.success({
          message: '成功',
          description: "注册成功，请登录",
          duration: 3,
        });


      router.push({ path: '/login' });


    }
    catch{

    }

  }

  async function handleBack() {
    router.push({ path: '/login' });
  }

  async function handSendCode(){
    //alert('发送验证码');
    try{
      let res =  await smsApi({mobile: formData.mobile});
      console.log(res);
    }
    catch{
      return false;
    }

    return true;
  }
</script>
