<script lang="ts" setup>

async function onLoginSuccess() {
  const redirect = '/'
  await navigateTo(redirect)
}
</script>

<template>
  <div>
    <FormLogin @success="onLoginSuccess" />
  </div>
</template>
