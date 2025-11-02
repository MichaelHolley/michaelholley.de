<script lang="ts">
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import TextInputComponent from '../shared/input/TextInputComponent.svelte';

	let nameInput = $state('');
	let emailInput = $state('');
	let messageInput = $state('');
</script>

<section id="contact" class="bg-white text-black">
	<div class="container py-8 md:py-16 md:pt-12 2xl:px-64">
		<div class="flex flex-row gap-2">
			<SectionHeader title="Contact" class="pb-8 text-center" />
			<div class="grow">
				<form method="POST" action="?/sendContactInformation" class=" *:mb-4">
					<div>
						<label class="mb-2 block text-sm font-bold" for="name">name</label>
						<TextInputComponent
							id="name"
							name="name"
							required
							bind:value={nameInput}
							placeholder="enter your first- and lastname"
						/>
					</div>
					<div>
						<label class="mb-2 block text-sm font-bold" for="email">email</label>
						<TextInputComponent
							id="email"
							name="email"
							type="email"
							required
							bind:value={emailInput}
							placeholder="enter your email"
						/>
					</div>
					<div>
						<label class="mb-2 block text-sm font-bold" for="message">message</label>
						<TextInputComponent
							id="message"
							name="message"
							bind:value={messageInput}
							required
							type="textarea"
						/>
					</div>
					<div>
						<button
							type="submit"
							class="mt-4 rounded bg-black px-4 py-2 font-bold text-white hover:bg-gray-800"
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
