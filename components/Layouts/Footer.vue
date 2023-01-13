<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-3 g-lg-5">
        <!-- column#links -->
        <div class="col-6 col-lg-3 order-lg-last">
          <div class="mb-4 pb-2">
            <NuxtLink to="/" class="link">
              Why Detalytics?
            </NuxtLink>
          </div>
          <div class="mb-4 pb-2">
            <NuxtLink to="/" class="link">
              Pricing
            </NuxtLink>
          </div>
          <div class="mb-4 pb-2">
            <NuxtLink to="/" class="link">
              About
            </NuxtLink>
          </div>
        </div>

        <!-- column#text -->
        <div class="col-6 col-lg-3">
          <div class="label">
            For Businesses
          </div>
          <div class="txt">
            <p class="mb-1">Better insights, better performance in...</p>
            <ul class="mb-1 ps-3">
              <li>Insurance brokers</li>
              <li>Care Providers</li>
              <li>Employers</li>
              <li>Safety-critical industries</li>
            </ul>
          </div>

          <div class="mt-3 label">
            For Individuals
          </div>
          <div class="txt">
            <p class="mb-1">Achieve your best in...</p>
            <ul class="mb-1 ps-3">
              <li>Work performance</li>
              <li>Work safety</li>
              <li>Health & wellbeing</li>
            </ul>
          </div>
        </div>

        <!-- column#contact -->
        <div class="col-lg-6 order-lg-first">
          <div class="mt-4">
            <NuxtLink to="/">
              <img
                srcset="@/assets/images/logo.png, @/assets/images/logo@2x.png 2x"
                src="@/assets/images/logo.png"
                alt="Detalytics"
                width="173"
                height="48"
              >
            </NuxtLink>
          </div>
          <h4 class="in-touch-title">
            Get in touch
          </h4>
          <div class="in-touch-desc">
            Want to find out more about our product?<br> Contact us at : _
          </div>
          <div class="in-touch-socials mb-3 mb-lg-0">
            <a href="#" class="me-3" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M9.43 8.97h3.71v1.85c.54-1.06 1.91-2.02 3.97-2.02 3.95 0 4.89 2.12 4.89 6V22h-4v-6.31c0-2.21-.54-3.46-1.9-3.46-1.89 0-2.67 1.34-2.67 3.46V22h-4V8.97ZM2.57 21.83h4V8.8h-4v13.03ZM7.14 4.55a2.53 2.53 0 0 1-.75 1.8A2.57 2.57 0 0 1 2 4.55c0-.68.27-1.32.75-1.8a2.58 2.58 0 0 1 4.4 1.8Z" />
              </svg>
            </a>
            <a href="#" class="me-3" title="Twitter" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M23.64 4.94c-.83.37-1.73.62-2.67.73.97-.58 1.7-1.5 2.05-2.58a9.3 9.3 0 0 1-2.96 1.13 4.66 4.66 0 0 0-7.94 4.25 13.23 13.23 0 0 1-9.6-4.87 4.66 4.66 0 0 0 1.44 6.22 4.65 4.65 0 0 1-2.11-.58v.06a4.66 4.66 0 0 0 3.74 4.57 4.7 4.7 0 0 1-2.1.08 4.66 4.66 0 0 0 4.34 3.23 9.35 9.35 0 0 1-6.9 1.93c2.14 1.37 4.61 2.1 7.15 2.1 8.57 0 13.25-7.1 13.25-13.26l-.01-.6a9.47 9.47 0 0 0 2.32-2.4v-.01Z" />
              </svg>
            </a>
            <a href="#" class="me-3" title="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <path d="M13.5 9.99a3.52 3.52 0 0 0 0 7.03 3.52 3.52 0 0 0 0-7.03Zm10.54 3.51c0-1.45.01-2.9-.07-4.35-.08-1.69-.46-3.19-1.7-4.42-1.23-1.24-2.73-1.62-4.42-1.7-1.45-.08-2.9-.07-4.35-.07-1.45 0-2.9-.01-4.35.07-1.69.08-3.18.47-4.42 1.7-1.23 1.24-1.62 2.73-1.7 4.42-.08 1.46-.07 2.9-.07 4.35 0 1.45-.01 2.9.07 4.35.08 1.69.47 3.19 1.7 4.42 1.24 1.24 2.73 1.62 4.42 1.7 1.46.08 2.9.07 4.35.07 1.46 0 2.9.01 4.35-.07 1.7-.08 3.19-.47 4.42-1.7 1.24-1.24 1.62-2.73 1.7-4.42.09-1.45.07-2.9.07-4.35ZM13.5 18.9a5.4 5.4 0 1 1-.02-10.8 5.4 5.4 0 0 1 .02 10.8Zm5.63-9.77a1.26 1.26 0 1 1 0-2.52 1.26 1.26 0 0 1 0 2.52Z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
.footer{
  padding: 2.5rem 0;
  @media (min-width: @screen-lg) {
    padding: 3.5rem 0;
  }
  .in-touch-title{
    font-size: 1.4rem;
    font-weight: 500;
    color: #439CA5;
    margin-top: 1rem;
    margin-bottom: .5rem;
  }
  .in-touch-desc{
    font-size: .85rem;
    color: #3CA9B4;
    margin-bottom: 1rem;
  }
  .in-touch-socials > a{
    color: #57BBC5;
    fill: currentColor;
    &:hover{
      color: darken(#57BBC5, 7%);
    }
  }
  .label{
    font-size: .85rem;
    font-weight: 700;
    color: #439CA5;
    margin-bottom: .25rem;
  }
  .txt{
    color: #3CA9B4;
    font-size: .7rem;
  }
  .link{
    font-size: .85rem;
    font-weight: 700;
    text-decoration: none;
    color: #439CA5;
    &:hover{
      color: lighten(#439CA5, 10%);
    }
  }
}
</style>
