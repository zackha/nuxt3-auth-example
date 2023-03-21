<script lang="ts" setup>
const currentUser = useAuthUser()
</script>

<template>
  <div>
    <PageUser :user="currentUser" />
  </div>
</template>
