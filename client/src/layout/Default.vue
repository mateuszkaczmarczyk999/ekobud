<template>
  <div>
    <MenuBar/>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <slot/>
      </keep-alive>
    </transition>
    <FooterInfo/>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar'
import FooterInfo from '../components/FooterInfo'

export default {
  components: { MenuBar, FooterInfo }
}
</script>
