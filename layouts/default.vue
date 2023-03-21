<script lang="ts" setup>
const currentUser = useAuthUser()
const { logout } = useAuth()
const form = reactive({
  pending: false,
})
async function onLogoutClick() {
  try {
    form.pending = true
    await logout()
    await navigateTo('/')
  }
  catch (error) {
    console.error(error)
  }
  finally {
    form.pending = false
  }
}
</script>

<template>
  <div min-h-screen flex flex-col bg-slate-900>
    <header p-3 mx-auto w-full max-w-4xl>
      <nav flex gap-3>
        <template v-if="currentUser">
          <button mb-3 ml-auto py-1 px-2 rounded bg-light-100 hover="bg-light-700" transition-colors
            :disabled="form.pending" @click="onLogoutClick">
            Logout
          </button>
        </template>

        <template v-else>
          <NuxtLink to="/login" ml-auto py-1 px-2 rounded bg-light-100 hover="bg-light-700" transition-colors>
            Login
          </NuxtLink>
        </template>
      </nav>
    </header>

    <main p-3 mx-auto w-full max-w-4xl>
      <slot />
    </main>
  </div>
</template>
