<svelte:options runes={true} />

<script>
  import { page } from "$app/stores";
  import { lastScrapeDate } from "$lib/stores/lastScrape.store";
</script>

<div class="flex items-center justify-between gap-2 p-4 py-6">
  <div class="flex items-center gap-2">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a href="/" data-sveltekit-preload-data="false" class="size-12 lg:size-7">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="-5.0 -10.0 110.0 135.0"
      >
        <path
          d="m80.766 48.246c1.4102-10.562 2.7422-20.117 4.0547-29.145 0.019532-0.12891 0.023438-0.25781 0.015626-0.38672 0.011718-0.13672 0.027343-0.27734 0.027343-0.41406 0-6.6172-13.262-13.312-38.605-13.312s-38.602 6.6992-38.602 13.312c0 0.13281 0.015625 0.26172 0.023438 0.39453-0.007813 0.13281-0.003907 0.26953 0.015624 0.40625 1.3438 9.2891 2.5547 17.922 3.6875 26.391 1.3359 9.8789 2.6055 19.812 3.9492 30.328l0.32812 2.582c0.22266 1.5898 0.60938 3.9336 1.4492 6.0273 1.0234 3.4453 4.1641 6.1094 9.3477 7.9258 5.2734 1.8477 12.219 2.6562 19.129 2.6562 10.715 0 21.352-1.9453 25.582-4.9766 4.1953-2.9766 5.3008-8.2266 5.7969-12.453 0.60156-4.7852 1.1836-9.3398 1.75-13.73 3.1094 1.0586 6.0898 1.7695 8.4766 1.7695 2.1641 0 3.8438-0.58594 4.6797-2.0352 1.8828-3.2656-1.8633-8.4258-11.105-15.336zm-59.801-36.035c6.7266-2.0781 15.711-3.2227 25.293-3.2227 21.125 0 34.605 5.5156 34.605 9.3125 0 1.4805-2.4375 3.9648-9.3125 6.0898-6.7266 2.0781-15.711 3.2227-25.293 3.2227-21.125 0-34.605-5.5156-34.605-9.3125 0-1.4805 2.4375-3.9648 9.3125-6.0898zm52.031 64.887c-0.39844 3.4219-1.2344 7.6133-4.1484 9.6797-5.4375 3.8984-28.223 6.3008-41.066 1.7969-2.7031-0.94531-6.0898-2.6445-6.8516-5.3477-0.019532-0.070312-0.046876-0.14453-0.074219-0.21484-0.69531-1.7031-1.0352-3.7656-1.2266-5.1445l-0.32812-2.5586c-1.3438-10.523-2.6172-20.465-3.9531-30.355-0.86719-6.4648-1.7773-13.027-2.7578-19.902 5.9688 3.7617 17.293 6.5586 33.668 6.5586 16.371 0 27.691-2.7969 33.664-6.5586-1.0625 7.4531-2.1406 15.305-3.2773 23.828-0.41016 3.0664-0.82031 6.1992-1.2422 9.4102-3.7969-1.5781-8.2656-3.7422-13.273-6.6328-3.8789-2.2383-7.5859-4.6523-10.816-7.0156 0.125-0.45312 0.19922-0.92188 0.19922-1.3984 0-2.8984-2.3555-5.2539-5.2539-5.2539-2.8984 0-5.2539 2.3555-5.2539 5.2539 0 2.8984 2.3555 5.2539 5.2539 5.2539 0.92578 0 1.8125-0.25 2.5938-0.69141 3.3672 2.4688 7.2461 4.9883 11.281 7.3164 1.3633 0.78906 7.8984 4.4922 14.738 7.2812-0.60547 4.6836-1.2266 9.5586-1.875 14.691zm-25.695-33.152c-0.23438 0.34766-0.625 0.55469-1.0391 0.55469-0.69141 0-1.2539-0.5625-1.2539-1.2539s0.5625-1.2539 1.2539-1.2539c0.69141 0 1.2539 0.5625 1.2539 1.2539 0 0.25-0.074219 0.49219-0.21094 0.69922zm31.945 15.828c0.30859-2.3594 0.60938-4.6758 0.91016-6.9492 6.1758 4.8789 7.9531 7.7773 8.168 8.7227-1.0859 0.39844-4.2969-0.089844-9.0781-1.7734z"
        />
      </svg>
    </a>
    <div class="flex flex-col lg:flex-row lg:gap-4">
      <a
        href="/"
        data-sveltekit-preload-data="false"
        class="text-xl font-medium">NewsDump</a
      >
      <div class=" flex items-center gap-2 text-gray-500">
        <div class="text-sm">by</div>
        <a
          target="_blank"
          href="https://topicular.com"
          class="font-medium flex items-center gap-2"
        >
          <img src="/logo.png" alt="Topicular" class="size-4" />
          <div class="-ml-1.5">opicular</div>
        </a>
      </div>
    </div>
  </div>

  <div class="hidden lg:flex items-center gap-10">
    <div class="tooltip" data-tip="Last Scraped">
      {#if $lastScrapeDate}
        <div class="badge badge-outline">
          {$lastScrapeDate}
        </div>
      {/if}
    </div>
    <div class="flex items-center gap-8">
      <a
        data-sveltekit-preload-data="false"
        href="/about"
        class="text-sm {$page.url.pathname === '/about' ? 'underline' : ''}"
        >About</a
      >
      <a
        data-sveltekit-preload-data="false"
        href="/"
        class="text-sm {$page.url.pathname === '/' ? 'underline' : ''}"
      >
        Feed
      </a>
    </div>
    <button class="btn bg-orange-600 text-white">Join the waitlist</button>
  </div>
  <div class="lg:hidden dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn m-1 bg-transparent border-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <ul
      tabindex="0"
      class="dropdown-content menu bg-[#d7d2c1] rounded-box z-[1] w-52 p-2 gap-2"
    >
      <li>
        {#if $lastScrapeDate}
          <div class="flex flex-col justify-start items-start">
            <div class="text-xs">Last Scraped at:</div>
            <div class="font-medium">{$lastScrapeDate}</div>
          </div>
        {/if}
      </li>
      <li class="btn">
        <a data-sveltekit-preload-data="false" href="/about">About NewsDump</a>
      </li>
      <li>
        <button class="btn bg-orange-600 text-white">Join the waitlist</button>
      </li>
    </ul>
  </div>
</div>
