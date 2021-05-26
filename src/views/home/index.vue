<template>
  <a-form
    ref="loginRef"
    :model="formState"
    :rules="rules"
  >
  <h3 class="title">Alex博客后台管理系统</h3>
    <a-form-item ref="name" name="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="onSubmit">Create</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import {  reactive, ref, toRaw } from 'vue';
export default {
  setup() {
    const loginRef = ref();
    const formState = reactive({
      name: ''
    });
    const rules = {
      name: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ]
    };

    const onSubmit = () => {
      loginRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch(error => {
          console.log('error', error);
        });
    };


    return {
      loginRef,
      other: '',
      formState,
      rules,
      onSubmit,
    };
    }
};
</script>