<template>
  <div class="body">
    <PagesHeader />
    <main>
      <img class="img-fluid" src="@/assets/img/strate-desktop.jpg"/>
      <div class="container">
        <div class="row">

          <div class="col-md-12">
            <section id="work" class="work__">
            <div class="container">
              <div class="section_header">
                <h2>كيف نعمل؟</h2>
                <!-- <p>نستلم تبرعاتك من موقعك ونوصلها لمحتاج يفرح بها</p> -->
              </div>
              <div class="kiswah_cards web">
                <div class="row">
                  <div class="col-md-4">
                    <div
                      class="c_card__ animate__animated second_"
                      v-inview:class="['animate__slideInLeft']"
                    >
                      <div class="c_card_img">
                        <img
                          src="@/assets/img/stock-photo-beautiful-muslim-lady-at-work.png"
                          alt=""
                        />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">2</span> تأكيد الطلب</h3>
                        <p>سيتم التواصل معكم لتاكيد موعد وعنوان الإستلام</p>
                      </div>
                    </div>
                    <div
                      class="c_card__ animate__animated fift_"
                      v-inview:class="['animate__slideInRight']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/kiswah-image-5.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">5</span> التوزيع</h3>
                        <p>
                          توزيع التبرعات على المحتاجين من خلال فريق كسوة التطوعي و
                          تحت اشراف االجمعيات الخيرية المعتمدة
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div
                      class="c_card__ animate__animated flex_style"
                      v-inview:class="['animate__slideInUp']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/press-phone.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">1</span> اطلب الخدمة</h3>
                        <p>تقديم طلب التبرع عبر الموقع الإلكتروني او التطبيق</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div
                          class="c_card__ animate__animated blue__"
                          v-inview:class="['animate__slideInUp']"
                        >
                          <div class="c_card_img">
                            <img src="@/assets/img/EQ0A0947.png" alt="" />
                          </div>
                          <div class="c_card_info">
                            <h3><span class="num">4</span> اعادة التدوير</h3>
                            <p>فرز واعادة تدوير التبرعات على يد فريقنا المختص</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div
                          class="c_card__ animate__animated blue__"
                          v-inview:class="['animate__slideInRight']"
                        >
                          <div class="c_card_img">
                            <img src="@/assets/img/EQ0A1063.png" alt="" />
                          </div>
                          <div class="c_card_info">
                            <h3><span class="num">3</span> استلام التبرعات</h3>
                            <p>استلام تبرعاتكم من منزلكم مجاناً خلال 24 ساعة</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="kiswah_cards mobile">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="c_card__ animate__animated flex_style">
                      <div class="c_card_img">
                        <img src="@/assets/img/press-phone.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">1</span> اطلب الخدمة</h3>
                        <p>تقديم طلب التبرع عبر الموقع الإلكتروني او التطبيق</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="c_card__ animate__animated second_">
                      <div class="c_card_img">
                        <img
                          src="@/assets/img/stock-photo-beautiful-muslim-lady-at-work.png"
                          alt=""
                        />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">2</span> تأكيد الطلب</h3>
                        <p>سيتم التواصل معكم لتاكيد موعد وعنوان الإستلام</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="c_card__ animate__animated blue__">
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A1063.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">3</span> استلام التبرعات</h3>
                        <p>استلام تبرعاتكم من منزلكم مجاناً خلال 24 ساعة</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="c_card__ animate__animated blue__">
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A0947.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">4</span> اعادة التدوير</h3>
                        <p>فرز واعادة تدوير التبرعات على يد فريقنا المختص</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="c_card__ animate__animated fift_">
                      <div class="c_card_img">
                        <img src="@/assets/img/kiswah-image-5.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">5</span> التوزيع</h3>
                        <p>
                          توزيع التبرعات على المحتاجين من خلال فريق كسوة التطوعي و
                          تحت اشراف االجمعيات الخيرية المعتمدة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>
          </div>


          <div class="col-md-6">
            <p class="text-right">
              كسوة هو مشروع تشغيلي يعمل بالتعاقد مع الجمعيات الخيرية المعتمدة بالمملكة العربية السعودية بهدف التبرع للتخلص الآمن من الملابس وتعزيز روح التكافل والتعاون المجتمعي، وحماية للبيئة من التلوث الضار بدفن او حرق الملابس.
لدى كسوة فريق عمل متكامل ومدرب لجمع الملابس وفرزها وتصنيفها إلى فئات وتغليف الصالح منها لمستفيدي الجمعيات الخيرية، وتصدير التالف منها إلى مصانع إعادة التدوير كي تعود بالنفع على الاقتصاد والريع المالي للجمعيات الخيرية بدلا من هدرها في النفايات، وتتم هذه العملية ضمن حلقة متصلة من الأقسام من عاملين من جمع وفرز وتوزيع الصالح وتصدير ومشاركة المتطوعين لتوزيع الملابس للأسر المتعففة. كسوة متواجدة في جميع المناطق حيث يتم رفع طلب التبرع عبر تطبيق كسوة او التواصل مع خدمة العملاء.
نؤمن أن الخير متأصل في فرد المواطن السعودي المسلم الذي يبتغي الأجر ويحتسبه في مساعدته لإخوته من المسلمين الذين يعوزهم الحاجة عن الحصول على ملابس تليق ليكتسوا بها في أيامهم وأعيادهم وشتائهم، حيث ذلك القميص المهجور في دولابك قد لا يمثل لك أي قيمة بعد تخليك عنه لكنه سيمثل الكثير لمن هو في حاجة إليه. فلا تخلو أسرة من ملابس فائضة فهو متوفرة في ملابس الصغار لما يكبروا، والكبار لما تبلى ثيابهم أو يتغير نمط لباسهم، أو يتم استهلاكه في مناسبات لا تسمح بالخروج بها مرة أخرى، فالأحرى أن يعاد الاستفادة منها كدائرة من مشاركة المعروف تدور بين أفراد المجتمع.
نعمل على تحقيق رؤية المملكة 2030 من خلال العمل على تحقيق التنمية المستدامة والمساهمة في دعم المهن المرتبطة بإعادة التدوير وبالتالي توفير مساحات دفن النفايات مما يساعدنا كمجتمع في الحفاظ على صحتنا وبيئتنا ومملكتنا الحبيبة
            </p>
            
            <div class="text-right">
              <button class="btn btn-primary" @click="$router.push('donate_form')">تبرع الآن</button>
            </div>

          </div>

          <div class="col-md-6">

          </div>
          
        </div>


      </div>
      




    </main>
    <Footer />



  </div>
</template>

<script>
import PagesHeader from "../../components/PagesHeader.vue";
import Footer from "../../components/Footer.vue";


export default {
  components: { PagesHeader, Footer },
};
</script>