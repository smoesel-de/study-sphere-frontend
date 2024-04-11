<svelte:head>
	<title>Stduy Sphere</title>
</svelte:head>
<div class="mx-2 sm:mx-auto sm:w-4/5 lg:w-2/6">
	<div class="card mt-24 bg-base-100 shadow-xl">
		<div class="card-body space-y-2 text-center">
			<h2 class="text-4xl font-extrabold">Login</h2>
			<label class="input input-bordered flex items-center gap-2">
				<i class="fa-solid fa-envelope"></i>
				<input placeholder="E-Mail" />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<i class="fa-solid fa-lock"></i>
				<input placeholder="Passwort" type="password" />
			</label>
			<div class="card-actions justify-center">
				<a class="btn btn-primary" href="https://smoesel.de">
					<i class="fa-solid fa-paper-plane"></i> Anmelden
				</a>
			</div>
		</div>
	</div>
</div>
