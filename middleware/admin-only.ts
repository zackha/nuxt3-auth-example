export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useState('user', () => null);

    if (!user.value || !user.value.roles.includes('ADMIN')) {
        // Same route === Initial load
        if (from.name === to.name) {
            return navigateTo({name: 'index'})
        }
        
        return abortNavigation()
    }
}) 