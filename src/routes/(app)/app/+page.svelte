<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<hi>
	{data.user?.email}
</hi>
