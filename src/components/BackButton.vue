<template>
	<router-link
		:to="{ name: 'main' }"
		class="back-button"
	>
		<icon-arrow size="20" />
		<span class="text">Back</span>
	</router-link>
</template>
<script>
import IconArrow from '../components/IconArrow'

export default {
	components:	{
		IconArrow
	}
}
</script>