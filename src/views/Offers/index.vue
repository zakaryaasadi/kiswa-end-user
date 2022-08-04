<template>
  <div class="body">
    <PagesHeader />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="align__flow">
              <p>العروض</p>
            </div>
          </div>
          
        </div>

        <div class="card-deck text-right" style="direction:rtl">
          <div class="card">
            <img src="@/assets/img/noon.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">نون - بقالة نون - سيفي</h3>
              <h4 class="card-text">خصم 15%</h4>
              <button class="btn btn-primary" style="min-height:0px!important" @click="show('noon')">اقرأ المزيد</button>            
            </div>
          </div>
          <div class="card">
            <img src="@/assets/img/fitness.png" class="card-img-top" alt="...">
            <div class="card-body">
               <h3 class="card-title">مركز منطقة لياقة الرياضي</h3>
               <h4 class="card-text">خصم 40%</h4>
              <button class="btn btn-primary " style="min-height:0px!important" @click="show('fitness')">اقرأ المزيد</button>            
            </div>
          </div>
          <div class="card">
            <img src="@/assets/img/redtag.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">عرض ردتاغ و تونتي 4</h3>
              <h4 class="card-text">خصم 20%</h4>
              <button class="btn btn-primary" style="min-height:0px!important" @click="show('redtag')">اقرأ المزيد</button>            
            </div>
          </div>
          <div class="card">
            <img src="@/assets/img/liv.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">Liv Fitness | لڤ فتنس</h3>
              <h4 class="card-text">خصم 50%</h4>
              <button class="btn btn-primary" style="min-height:0px!important" @click="show('liv')">اقرأ المزيد</button>            
            </div>
          </div>
          
        </div>
      </div>
      




    </main>
    <Footer />
    <!-- Modal -->
    <modal
        name="noon"
        :width="700"
        height="auto"
        :resizable="true"
        :adaptive="true"
        :scrollable="true"
      >
        <div class="text-right pr-3 pt-2">
          <small class="text-primary mb-3 cancel" @click="cancel('noon')"><b>x</b></small>
        </div>
        <div class="more__news">
          <div class="p__info">
            <h4>نون - بقالة نون - سيفي</h4>
            <div class="text-right" style="direction:rtl">
              <p>
                <b>نون</b>: خصم <b>15%</b> للمستخدمين لأول مرة و <b>10%</b> للمستخدمين المسجلين حتى <b>50</b> ريال سعودي
              </p>
              <p >
                <b>نون اليومي</b>: خصم <b>50%</b> للمستخدمين لأول مرة حتى <b>20</b> ريال سعودي و <b>10%</b> للمستخدمين المسجلين حتى <b>10</b> ريال سعودي    
              </p>
              <p>
                <b>سيفي</b>: <b>20%</b> على الأصناف غير المخفضة حتى <b>250</b> ريال سعودي
              </p>
              <p>
                  <b>%10</b> على المنتجات المخفضة حتى <b>150</b> ريال سعودي 
              </p>
              <p>
                <b>%5</b> على <b>بيوتي ماكس</b> حتى ريال سعودي
              </p>
            </div>
          </div>
          <img
            src="@/assets/img/noon.png"
            alt="thumbnail"
            class="img-fluid"
          />
        </div>
      </modal>

   <modal
        name="liv"
        :width="700"
        height="auto"
        :resizable="true"
        :adaptive="true"
        :scrollable="true"
      >
        <div class="text-right pr-3 pt-2">
          <small class="text-primary mb-3 cancel" @click="cancel('liv')"><b>x</b></small>
        </div>
        <div class="more__news">
          <div class="p__info">
            <h4>Liv Fitness | لڤ فتنس</h4>
            <div class="text-right" style="direction:rtl">
              <p>
                هذا العرض مقدم من نادي لڤ فتنس للمتبرعات بفائض ملابسهم لصالح مشروع كسوة دعمًا لهم في مدينة جدة  (للنساء فقط)
              </p>
              <h4>
                <b>خصم بقيمة 50% </b>
              </h4>
              <ul>
                <li>الخصم لا يسري على العروض الترويجية</li>
                <li>يطبق الخصم على الأسعار الأساسية للاشتراكات</li>
                <li>الخصم ساري حتى 22 مايو 2023</li>
              </ul>
            </div>
          </div>
          <img
            src="@/assets/img/liv.png"
            alt="thumbnail"
            class="img-fluid"
          />
        </div>
      </modal>
          <modal
        name="fitness"
        :width="700"
        height="auto"
        :resizable="true"
        :adaptive="true"
        :scrollable="true"
      >
        <div class="text-right pr-3 pt-2">
          <small class="text-primary mb-3 cancel" @click="cancel('fitness')"><b>x</b></small>
        </div>
        <div class="more__news">
          <div class="p__info">
            <h4>مركز منطقة لياقة الرياضي - Fitness Zone</h4>
            <div class="text-right" style="direction:rtl">
              <p>
                هذا العرض مقدم من مركز منطقة لياقة الرياضي للمتبرعات بفائض ملابسهم لصالح مشروع كسوة دعمًا لهم في المدينة المنورة (للنساء فقط)
              </p>
              <h4>
                <b>خصم بقيمة 40% </b>
              </h4>
              <ul>
                <li>الخصم لا يسري على العروض الترويجية</li>
                <li>يطبق الخصم على الأسعار الأساسية للاشتراكات</li>
                <li>الخصم ساري حتى 31 ديسمبر 2022</li>
                <li>الخصم لعدد 200 متبرع فقط</li>
              </ul>
            </div>
          </div>
          <img
            src="@/assets/img/fitness.png"
            alt="thumbnail"
            class="img-fluid"
          />
        </div>
      </modal>



       <modal
        name="redtag"
        :width="700"
        height="auto"
        :resizable="true"
        :adaptive="true"
        :scrollable="true"
      >
        <div class="text-right pr-3 pt-2">
          <small class="text-primary mb-3 cancel" @click="cancel('redtag')"><b>x</b></small>
        </div>
        <div class="more__news text-right" style="direction:rtl">
          <div class="p__info">
            <h4>عرض ردتاغ و تونتي 4</h4>
            <h4><b>خصم 20%</b></h4>
            <div>
              <p>
                  هذا العرض مقدم من شركة ردتاغ لدعم المتبرعين بفائض ملابسهم لصالح مشروع كسوة
              </p>
              <p>
                من خلال العرض تستطيع أن تتسوق أون لاين من خلال موقع ردتاغ امسح الرمز الموجود بالكوبون الذي وصلك 
              </p>
              <p>
                استخدم الرمز<b>AFKC20</b> عند الدفع
              </p>
              <h4>
                <b>الأحكام والشروط</b>
              </h4>
              <ul>
                <li>لا يشمل التخفيض البضائع التي تشملها عروض أخرى</li>
                <li>التخفيض صالح على البضائع الغير المخفضة</li>
                <li>لا يمكن استخدام البطاقة بالتزامن مع العروض الترويجية الاخرى</li>
                <li>لا يجوز تطبيق الخصم على شراء بطاقة هدية</li>
                <li>تحتفظ ردتاغ وتونتي 4 بالحق في وقف هذا الانتساب دون إعطاء إشعار</li>
                <li>تستخدم في جميع محلات ردتاغ و تونتي 4 في السعودية</li>
                <li>هذا العرض مقدم من شركة ردتاغ دور كسوة هو توزيعها على المتبرعين فقط</li>
              </ul>
            </div>
          </div>
          <img
            src="@/assets/img/redtag.png"
            alt="thumbnail"
            class="img-fluid"
          />
        </div>
      </modal>


  </div>
</template>

<script>
import PagesHeader from "../../components/PagesHeader.vue";
import Footer from "../../components/Footer.vue";

export default {
  components: { PagesHeader, Footer },
  methods:{
        cancel(name) {
            this.$modal.hide(name);
        },
        show(name) {
            this.$modal.show(name);
        },
  },
  
};
</script>

<style scoped>
.cancel {
  font-size: 16px;
  cursor: pointer;
  text-align: right;
  padding-top: 30px;
  padding-left: 10px;
}

.vm--modal .more__news {
  padding: 30px !important;
  text-align: right;
}
.more__news--image {
  width: 600px !important;
  margin: 0 auto !important;
  object-fit: contain;
  /* max-width: 400px; */
}
</style>