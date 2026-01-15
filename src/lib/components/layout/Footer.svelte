<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import { site } from '$lib/config/site';
</script>

<footer class="border-t border-gray-200 bg-gray-50">
  <Container>
    <div class="grid gap-8 py-12 md:grid-cols-3">
      <div>
        <p class="font-heading text-3xl text-gray-900">Nina Untch Pilates</p>
        <p class="mt-2 text-sm text-gray-600">{site.description}</p>
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-gray-500">Kontakt</p>
        <ul class="mt-3 space-y-2 text-sm text-gray-700">
          <li>{site.footer.address}</li>
          <li>{site.footer.phone}</li>
          <li>{site.footer.email}</li>
        </ul>
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-gray-500">Öffnungszeiten</p>
        <ul class="mt-3 space-y-2 text-sm text-gray-700">
          <li>Mo–Fr: 07:00 – 21:00</li>
          <li>Sa: 09:00 – 16:00</li>
          <li>So: nach Vereinbarung</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-200 py-6 text-xs text-gray-500">
      © {new Date().getFullYear()} Nina Untch Pilates. Alle Rechte vorbehalten.
    </div>
  </Container>
</footer>
