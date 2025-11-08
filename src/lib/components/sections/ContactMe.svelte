<script lang="ts">
	import { enhance } from '$app/forms';
	import SectionHeader from '$lib/components/shared/SectionHeader.svelte';
	import TextInputComponent from '../shared/input/TextInputComponent.svelte';

	let nameInput = $state('');
	let mailInput = $state('');
	let messageInput = $state('');
</script>

<section id="contact" class="bg-white text-black">
	<div class="container py-8 md:py-16 md:pt-12 2xl:px-64">
		<div class="flex flex-row gap-2">
			<div style="writing-mode: vertical-rl;">
				<SectionHeader title="Contact" />
			</div>
			<div class="grow">
				<form
					method="POST"
					action="?/sendContactInformation"
					class="grid grid-cols-2 gap-4"
					use:enhance
				>
					<div class="col-span-2 lg:col-span-1">
						<label for="name">name</label>
						<TextInputComponent
							id="name"
							name="name"
							required
							bind:value={nameInput}
							placeholder="enter your first- and lastname"
						/>
					</div>
					<div class="col-span-2 lg:col-span-1">
						<label for="mail">mail</label>
						<TextInputComponent
							id="mail"
							name="mail"
							type="email"
							required
							bind:value={mailInput}
							placeholder="enter your mail"
						/>
					</div>
					<div class="col-span-2">
						<label for="message">message</label>
						<TextInputComponent
							id="message"
							name="message"
							bind:value={messageInput}
							required
							type="textarea"
							rows={4}
							placeholder="enter your message here and describe your inquiry"
						/>
					</div>
					<div class="col-span-2">
						<button
							type="submit"
							class="float-end rounded bg-black px-5 py-2 font-bold text-white hover:bg-black/80"
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	@reference "tailwindcss";

	label {
		@apply mb-1 block text-sm font-bold text-neutral-500;
	}
</style>
