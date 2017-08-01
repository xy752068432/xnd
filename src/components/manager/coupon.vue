<template>
	<div>
        <managerheader></managerheader>
        <managerleft></managerleft>
	</div>
</template>
<script>
import managerheader from '../../components/manager/managerheader'
import managerleft from '../../components/manager/managerleft'
export default {
  name: 'data',
  components: {
    managerheader,
    managerleft
  }
}
</script>
<style>
</style>
