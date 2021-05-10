export default function ({store, redirect}) {
    if (!store.getters['getUsername']){
      if (!['/login', '/register'].includes(store.$router.history.current.path)) {
        return redirect('/login')
      }
    }
  }
  