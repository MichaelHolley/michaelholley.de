<script lang="ts">
	interface NavigatorLink {
		title: String;
		ref: string;
	}

	const links: NavigatorLink[] = [
		{
			title: 'Dev',
			ref: 'dev'
		},
		{
			title: 'Tätigkeiten',
			ref: 'taetigkeiten'
		},
		{
			title: 'Projekte',
			ref: 'projekte'
		}
	];
</script>

<footer class="invisible md:visible fixed z-20 bottom-5 right-5 text-right">
	<ul>
		{#each links as link, i}
			<li class="mb-1"><a href={'#' + link.ref}><h4 class="lowercase">{link.title}</h4></a></li>
		{/each}
	</ul>
</footer>
