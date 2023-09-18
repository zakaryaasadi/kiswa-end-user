<template>
  <div class="success-page">
    <!-- Success Modal -->
    <b-modal
      size="md"
      ref="success_modal"
      @hidden="closeSuccessModal"
      dialog-class="success_modal"
      hide-footer
      hide-header
      centered
    >
      <div class="text-center p-5">
        <img
          class="success-img"
          height="60" width="60"
          src="../../assets/img/main/check.svg"
          alt="Success Svg"
        />
        <h4 class="mt-3">تم رفع طلبكم بنجاح.
        </h4>
        <h4>
          سيتصل بكم مندوبنا خلال يومين لتحديد توقيت الإستلام الذي يناسبكم.       </h4>
        <h4>شكراً جزيلاً لإختياركم كسوة
        </h4>
        <h4>
          نتمنى لكم يوماً طيباً.
        </h4>
      </div>
    </b-modal>
    <!-- Success Modal End-->
  </div>
</template>

<script>
export default {
  created() {
    window.fbq("track", "Order-Success");
  },
  mounted() {
    this.$refs["success_modal"].show();
  },
  methods: {
    closeSuccessModal() {
      this.$refs["success_modal"].hide();
      this.$router.push("/home");
    },
  },
};


!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

  ttq.load('CCAPB9JC77U3OVB181QG');
  ttq.page();
}(window, document, 'ttq');
</script>

<style>
</style>