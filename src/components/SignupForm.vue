<template>
  <!-- Breakdown Components as deemed fit -->
  <div class="form_wrapp">
    <div class="form_header">
      <div class="form_caption">
        <h2>طلب تبرع جديد</h2>
        <!-- <p>سيتم التواصل معك من قبل المندوب لتأكيد موعد الاستلام</p> -->
      </div>
      <span class="icon_view">
        <svg
          width="21px"
          height="24px"
          viewBox="0 0 21 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Website"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Landing-Page"
              transform="translate(-203.000000, -283.000000)"
              stroke="#FFFFFF"
            >
              <g id="Group-12" transform="translate(160.000000, 229.000000)">
                <g id="Group-4" transform="translate(34.000000, 46.000000)">
                  <g id="Group-2" transform="translate(9.000000, 8.000000)">
                    <rect
                      id="Rectangle"
                      x="1"
                      y="3.5"
                      width="16"
                      height="20"
                      rx="2"
                    ></rect>
                    <rect
                      id="Rectangle-Copy"
                      fill="#009BC9"
                      x="4"
                      y="0.5"
                      width="16"
                      height="20"
                      rx="2"
                    ></rect>
                    <path
                      d="M6,4.52112117 C7.33333333,4.50704039 8.66666667,4.49295961 10,4.47887883"
                      id="Path"
                    ></path>
                    <polyline
                      id="Path-2"
                      points="6 4.5 6.57022977 4.5 6.5966034 4.5 6.65414585 4.5 7.42017982 4.5 7.44375624 4.5 7.5016983 4.5 7.5976024 4.5 7.65594406 4.5 7.71388611 4.5 7.80979021 4.5 7.83616384 4.5 7.89450549 4.5 7.94725275 4.5 7.97362637 4.5 8 4.5"
                    ></polyline>
                    <path
                      d="M6,6.63627492 C9.66666667,6.54542497 13.3333333,6.45457503 17,6.36372508"
                      id="Path-3"
                    ></path>
                    <path
                      d="M6,8.40111191 C10,8.26416188 14,8.73583812 18,8.59888809"
                      id="Path-4"
                    ></path>
                    <polyline
                      id="Path-5"
                      points="6 11.5 14.5111097 11.5 15.9211572 11.5 15.9609044 11.5 16 11.5"
                    ></polyline>
                    <polyline
                      id="Path-6"
                      points="6 13.5 7.18642091 13.5 10.0013999 13.5 10.9241717 13.5 11 13.5"
                    ></polyline>
                    <polyline
                      id="Path-7"
                      points="6 13.5 6.7901569 13.5 7.21966362 13.5 9.08443391 13.5 9.85370809 13.5 10.0501185 13.5 10.185574 13.5 10.3825488 13.5 10.5180043 13.5 11 13.5"
                    ></polyline>
                    <polyline
                      id="Path-8"
                      points="6 16.5 10.7195019 16.5 16 16.5"
                    ></polyline>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </span>
    </div>
    <div class="form_body">
      <b-form ref="signup_modal" @submit.prevent="registerCustomer">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="الاسم"
            v-model="newCustomer.name"
            required
          />
        </div>
        <!-- <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="اسم االمستخدم"
            v-model="newCustomer.username"
            required
          />
          <small class="text-danger" v-if="errors.username">{{
            errors.username
          }}</small>
        </div> -->
        <div class="form-group">
          <VuePhoneNumberInput
            v-model="newCustomer.phone"
            @update="onUpdate"
            default-country-code="SA"
            :only-countries="['SA', 'AE', 'BH', 'KW', 'OM', 'QA']"
            required
          />
          <small class="text-danger" v-if="errors.phone">{{
            errors.phone
          }}</small>
        </div>
        <!-- <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="رقم الجوال"
            v-model="newCustomer.email"
            required
          />
          <small class="text-danger" v-if="errors.email">{{
            errors.email
          }}</small>
        </div> -->
        <!-- <div class="input-group">
          <input
            type="password"
            class="form-control"
            placeholder="أدخل كلمة المرور"
            v-model="newCustomer.password"
            required
          />
          <i class="fas fa-eye-slash" @click="togglePasswordVisibility"></i
          >
        </div> -->
        <!-- <div class="input-group" v-else>
          <input
            type="text"
            class="form-control"
            placeholder="أدخل كلمة المرور"
            v-model="newCustomer.password"
          />
          <i class="fas fa-eye" @click="togglePasswordVisibility"></i
          >
        </div> -->
        <div class="form-group map_">
          <vue-google-autocomplete
            id="map"
            ref="address"
            classname="form-control ok"
            placeholder="رابط الموقع من خرائط جوجل"
            v-model="newCustomer.address"
            v-on:placechanged="getAddressData"
            required
          >
          </vue-google-autocomplete>
          <div class="map_wrapp mt-4" id="map_wrapp">
            <gmaps-map :options="options" @click="showEvent">
              <gmaps-marker
                :options="markerOption"
                :position="position"
                @move="updateLocation"
              ></gmaps-marker>
            </gmaps-map>
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">
            <span>انشاء الطلب</span>
            <div
              class="spinner-border text-light ms-2"
              role="status"
              v-if="registerLoading"
            >
              <span class="visually-hidden"></span>
            </div>
            <span class="icon_" v-else>
              <svg
                width="35"
                height="22"
                viewBox="0 0 35 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 11.043H2"
                  stroke="#ffffff"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.0417 20.0833L2 11.0417L11.0417 2"
                  stroke="#ffffff"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
          <!-- <p v-if="signuppage">
            لديك طلب قائم؟
            <span>تابع حالة طلبك من خلال هذا الرابط</span>
          </p> -->
          <p>يمكنك تحديد اليوم بعد الضغط على انشاء الطلب</p>
        </div>
      </b-form>
    </div>

    <!-- Task Modal -->
    <b-modal
      ref="task_modal"
      content-class="side_modal"
      left
      hide-footer
      hide-header
    >
      <div class="modal__container">
        <div class="row justify-content-between">
          <div class="col-md-6 text-left">
            <img
              style="cursor: pointer"
              @click="hideTaskModal"
              height="20"
              width="20"
              src="../assets/img/close.png"
              alt="Close icon"
            />
          </div>
          <div class="col-md-6">
            <h4>طلب تبرع جديد</h4>
          </div>
        </div>
        <div class="section_info">
          <div class="card_info info">
            <p>{{ customer.name }}</p>
            <p>{{ customer.phone }}</p>
            <p>{{ customer.address }}</p>
            <p>{{ customer.email }}</p>
          </div>
          <!-- <p class="info_part">سيتم التواصل معك من قبل المندوب لتأكيد موعد الاستلام</p> -->
        </div>
        <div class="section_info">
          <p>
            <b>نوع التبرع</b> <br />
            الرجاء اختيار نوع التبرع.
          </p>
          <div class="card__s" v-if="donations">
            <label
              class="card_option"
              :class="
                donationType.findIndex((t) => t.id == card.id) >= 0
                  ? 'selected'
                  : ''
              "
              v-for="card in donations"
              :key="card.id"
            >
              <div class="demograph">
                <img :src="card.icon" :alt="`${card.name} Icon`" />
              </div>
              <div class="input-container d-flex align-items-center">
                <input
                  type="checkbox"
                  :name="card.name.toLowerCase()"
                  :value="card"
                  :id="card.name.toLowerCase()"
                  v-model="donationType"
                  @change="setDonationType($event, card)"
                />
                <div class="pl-3 card_option_footer">
                  <!-- <div class="check_">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.9979 0.887183L4.26693 11.1945L3.45269 11.1576L0 6.24127L0.843095 5.65023L3.91266 10.0197L12.2122 0.220703L13 0.887183H12.9979Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="check_">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      fill="#f9fbff"
                      stroke-width="1"
                      stroke="#009bc9"
                      x="0.5"
                      y="0.5"
                      width="23"
                      height="23"
                      rx="5.5"
                    />
                  </svg>
                </div> -->
                  <p class="active" v-if="card.is_available">{{ card.name }}</p>
                  <p class="not_active" v-else>
                    Not Available <br />
                    {{ card.name }}
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div class="section_info">
          <p>
            <b>الجمعيات</b> <br />
            اختر أحد الجمعيات المتاحة
          </p>
          <div class="card_info small_bar" style="direction:rtl;">
            <select
              name="availableDates"
              id="availableDates"
            >
              <option value=""><p>جمعية الصم و ضعاف السمع و ذويهم - الدمام</p></option>
              <option value=""><p>جمعية خيبر النسائية الخيرية</p></option>
              <option value=""><p>جمعية أبو جلال الخيرية </p></option>
              <option value=""><p>جمعية البر الخيرية بالقرين</p></option>
              <option value=""><p>جمعية البر الخيرية بالدليمية </p></option>
              <option value=""><p>جمعية البر الخيرية بتمير</p></option>
              <option value=""><p>جمعية الملك خالد الخيرية النسائية بتبوك</p></option>
              <option value=""><p>جمعية البر الخير بالشرائع </p></option>
              <option value=""><p>جمعية رعاية الأيتام في طريف</p></option>
              <option value=""><p>جمعية الملك عبدالعزيز الخيرية النسائية بالجوف</p></option>
            </select>
          </div>
        </div>
        <!-- <div class="section_info">
          <p>
            <b>الوقت</b> <br />
            اختر أحد الأوقات المتاحة
          </p>
          <div class="card_info small_bar">
            <div class="check_ down_">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.707 6.707L12.293 5.293L7.99997 9.586V0H5.99997V9.586L1.70697 5.293L0.292969 6.707L6.99997 13.414L13.707 6.707Z"
                  fill="#4A4A4A"
                />
              </svg>
            </div>
            <div>
              <p v-for="(day, index) in yourDaysArray" :key="index">
                <vue-timepicker
                  v-model="day.start_time"
                  placeholder="Start Time"
                  format="h:mm:ss A"
                  re
                ></vue-timepicker>
                <span> - </span>
                <vue-timepicker
                  v-model="day.end_time"
                  placeholder="End Time"
                  format="h:mm:ss A"
                ></vue-timepicker>
              </p>
              <span class="icon_day">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 20.625C13.5082 20.625 12.0774 20.0324 11.0225 18.9775C9.96763 17.9226 9.375 16.4918 9.375 15C9.375 13.5082 9.96763 12.0774 11.0225 11.0225C12.0774 9.96763 13.5082 9.375 15 9.375C16.4918 9.375 17.9226 9.96763 18.9775 11.0225C20.0324 12.0774 20.625 13.5082 20.625 15C20.625 16.4918 20.0324 17.9226 18.9775 18.9775C17.9226 20.0324 16.4918 20.625 15 20.625ZM15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5V22.5ZM15 0C15.2486 0 15.4871 0.0987721 15.6629 0.274587C15.8387 0.450403 15.9375 0.68886 15.9375 0.9375V4.6875C15.9375 4.93614 15.8387 5.1746 15.6629 5.35041C15.4871 5.52623 15.2486 5.625 15 5.625C14.7514 5.625 14.5129 5.52623 14.3371 5.35041C14.1613 5.1746 14.0625 4.93614 14.0625 4.6875V0.9375C14.0625 0.68886 14.1613 0.450403 14.3371 0.274587C14.5129 0.0987721 14.7514 0 15 0V0ZM15 24.375C15.2486 24.375 15.4871 24.4738 15.6629 24.6496C15.8387 24.8254 15.9375 25.0639 15.9375 25.3125V29.0625C15.9375 29.3111 15.8387 29.5496 15.6629 29.7254C15.4871 29.9012 15.2486 30 15 30C14.7514 30 14.5129 29.9012 14.3371 29.7254C14.1613 29.5496 14.0625 29.3111 14.0625 29.0625V25.3125C14.0625 25.0639 14.1613 24.8254 14.3371 24.6496C14.5129 24.4738 14.7514 24.375 15 24.375V24.375ZM30 15C30 15.2486 29.9012 15.4871 29.7254 15.6629C29.5496 15.8387 29.3111 15.9375 29.0625 15.9375H25.3125C25.0639 15.9375 24.8254 15.8387 24.6496 15.6629C24.4738 15.4871 24.375 15.2486 24.375 15C24.375 14.7514 24.4738 14.5129 24.6496 14.3371C24.8254 14.1613 25.0639 14.0625 25.3125 14.0625H29.0625C29.3111 14.0625 29.5496 14.1613 29.7254 14.3371C29.9012 14.5129 30 14.7514 30 15ZM5.625 15C5.625 15.2486 5.52623 15.4871 5.35041 15.6629C5.1746 15.8387 4.93614 15.9375 4.6875 15.9375H0.9375C0.68886 15.9375 0.450403 15.8387 0.274587 15.6629C0.0987721 15.4871 0 15.2486 0 15C0 14.7514 0.0987721 14.5129 0.274587 14.3371C0.450403 14.1613 0.68886 14.0625 0.9375 14.0625H4.6875C4.93614 14.0625 5.1746 14.1613 5.35041 14.3371C5.52623 14.5129 5.625 14.7514 5.625 15ZM25.6069 4.39312C25.7826 4.56893 25.8814 4.80735 25.8814 5.05594C25.8814 5.30453 25.7826 5.54294 25.6069 5.71875L22.9556 8.37188C22.8685 8.45892 22.765 8.52794 22.6512 8.575C22.5373 8.62206 22.4153 8.64623 22.2922 8.64615C22.0434 8.64597 21.8049 8.54697 21.6291 8.37094C21.542 8.28377 21.473 8.18032 21.4259 8.06648C21.3789 7.95264 21.3547 7.83064 21.3548 7.70746C21.355 7.45868 21.454 7.22016 21.63 7.04437L24.2812 4.39312C24.4571 4.21737 24.6955 4.11864 24.9441 4.11864C25.1927 4.11864 25.4311 4.21737 25.6069 4.39312V4.39312ZM8.37 21.63C8.54575 21.8058 8.64449 22.0442 8.64449 22.2928C8.64449 22.5414 8.54575 22.7798 8.37 22.9556L5.71875 25.6069C5.54194 25.7776 5.30512 25.8721 5.05931 25.87C4.8135 25.8679 4.57837 25.7693 4.40455 25.5955C4.23073 25.4216 4.13213 25.1865 4.12999 24.9407C4.12786 24.6949 4.22235 24.4581 4.39312 24.2812L7.04437 21.63C7.22018 21.4542 7.4586 21.3555 7.70719 21.3555C7.95578 21.3555 8.19419 21.4542 8.37 21.63V21.63ZM25.6069 25.6069C25.4311 25.7826 25.1927 25.8814 24.9441 25.8814C24.6955 25.8814 24.4571 25.7826 24.2812 25.6069L21.63 22.9556C21.4592 22.7788 21.3647 22.542 21.3669 22.2962C21.369 22.0504 21.4676 21.8152 21.6414 21.6414C21.8152 21.4676 22.0504 21.369 22.2962 21.3669C22.542 21.3647 22.7788 21.4592 22.9556 21.63L25.6069 24.2812C25.7826 24.4571 25.8814 24.6955 25.8814 24.9441C25.8814 25.1927 25.7826 25.4311 25.6069 25.6069ZM8.37 8.37188C8.19419 8.54763 7.95578 8.64636 7.70719 8.64636C7.4586 8.64636 7.22018 8.54763 7.04437 8.37188L4.39312 5.71875C4.30358 5.63227 4.23216 5.52882 4.18303 5.41444C4.1339 5.30006 4.10803 5.17704 4.10695 5.05256C4.10587 4.92808 4.12959 4.80463 4.17673 4.68942C4.22387 4.5742 4.29348 4.46953 4.3815 4.3815C4.46953 4.29348 4.5742 4.22387 4.68942 4.17673C4.80463 4.12959 4.92808 4.10587 5.05256 4.10695C5.17704 4.10803 5.30006 4.1339 5.41444 4.18303C5.52882 4.23216 5.63227 4.30358 5.71875 4.39312L8.37 7.04437C8.45731 7.13146 8.52657 7.23491 8.57384 7.34881C8.6211 7.46271 8.64543 7.58481 8.64543 7.70813C8.64543 7.83144 8.6211 7.95354 8.57384 8.06744C8.52657 8.18134 8.45731 8.28479 8.37 8.37188V8.37188Z"
                    fill="#979797"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div> -->
        <button
          class="btn btn-green btn-block"
          type="submit"
          v-if="taskLoading"
        >
          <span>جار التحميل</span>
          <div class="spinner-border text-light ms-2" role="status">
            <span class="visually-hidden"></span>
          </div>
        </button>
        <button class="btn btn-green btn-block" @click="createtask" v-else>
          <span class="cta-text">ارسال الطلب</span>
          <span class="check_">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9979 0.887183L4.26693 11.1945L3.45269 11.1576L0 6.24127L0.843095 5.65023L3.91266 10.0197L12.2122 0.220703L13 0.887183H12.9979Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </b-modal>

    <!-- Otp Modal -->
    <!-- <b-modal
      ref="otp_modal"
      content-class="side_modal"
      left
      hide-footer
      hide-header
    >
      <div class="modal__container otp">
        <div class="wrap__center">
          <form @submit.prevent="updatePasswordFunc">
            <div class="modals_card">
            <h4>رمز التحقق</h4>
            <p>
              تم ارسال رمز التحقق من رقم الجوال في رسالة نصية على الرقم التالي.
            </p>
            <div class="phone_">{{customer.phone}}</div>
            <p class="info__">أرسل الرمز مرة أخرى بعد ٣٠ ثانية…</p>

            <div class="otp_inputs">
              <v-otp-input
                ref="otpInput"
                input-classes="form-control"
                separator="-"
                :num-inputs="4"
                :should-auto-focus="true"
                :is-input-num="true"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
              />
            </div>
            <div class="form-group">
              <input type="password" name="updatePassword" id="updatePassword" placeholder="" v-model="updatePassword.password" required>
            </div>
          </div>
          <button
              class="btn btn-primary btn-block"
              type="submit"
              v-if="updatePasswordLoading"
            >
              <span>جار التحميل</span>
              <div class="spinner-border text-light ms-2" role="status">
                <span class="visually-hidden"></span>
              </div>
            </button>
          <button class="btn btn-primary btn-block" v-else>
            <span>انشاء الطلب</span>
            <span class="check_">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.9979 0.887183L4.26693 11.1945L3.45269 11.1576L0 6.24127L0.843095 5.65023L3.91266 10.0197L12.2122 0.220703L13 0.887183H12.9979Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
          </form>
        </div>
      </div>
    </b-modal> -->

    <!-- login Modal -->
    <!-- <b-modal
      ref="login_modal"
      content-class="side_modal"
      left
      hide-footer
      hide-header
    >
      <div class="modal__container otp">
        <div class="wrap__center">
          <form @submit.prevent="loginCustomer">
            <div class="modals_card">
              <h4>رمز التحقق</h4>
              <p class="info__">أرسل الرمز مرة أخرى بعد ٣٠ ثانية…</p>
              <div class="_inputs">
                <div class="country">
                  <input type="text" class="form-control" />
                </div>
                <div class="withAppend">
                  <input type="text" class="form-control" />
                  <span class="check_">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.9979 0.887183L4.26693 11.1945L3.45269 11.1576L0 6.24127L0.843095 5.65023L3.91266 10.0197L12.2122 0.220703L13 0.887183H12.9979Z"
                        fill="#4A4A4A"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="form-group">
                <VuePhoneNumberInput
                  v-model="returningCustomer.phone"
                  @update="returningCustomerPhone"
                  required
                />
              </div>
            </div>
            <button
              class="btn btn-primary btn-block"
              type="submit"
              v-if="loginLoading"
            >
              <span>جار التحميل</span>
              <div class="spinner-border text-light ms-2" role="status">
                <span class="visually-hidden"></span>
              </div>
            </button>
            <button class="btn btn-primary btn-block" type="submit" v-else>
              <span>انشاء الطلب</span>
              <span class="check_">
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.9979 0.887183L4.26693 11.1945L3.45269 11.1576L0 6.24127L0.843095 5.65023L3.91266 10.0197L12.2122 0.220703L13 0.887183H12.9979Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </b-modal> -->

    <!-- tracking Modal -->
    <!-- <b-modal
      ref="track_modal"
      content-class="side_modal"
      left
      hide-footer
      hide-header
    >
      <div class="modal__container otp">
        <div class="wrap__center">
          <div class="modals_card">
            <div class="track_progress">
              <div class="progress_">
                <div class="progress_line">
                  <span class="stage success">
                    <span>
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.9979 0.887183L4.26693 11.1945L3.45269 11.1576L0 6.24127L0.843095 5.65023L3.91266 10.0197L12.2122 0.220703L13 0.887183H12.9979Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>

                  <div class="v_infor">
                    Request sent
                    <span class="time">5 minutes ago</span>
                  </div>
                </div>
                <div class="progress_line">
                  <span class="stage"></span>
                  Agent assigned
                </div>
                <div class="progress_line">
                  <span class="stage"></span>
                  On the way for pick up
                </div>
                <div class="progress_line">
                  <span class="stage"></span>
                  Completes
                </div>
              </div>
            </div>
            <div class="call_section">
              <span>Call agent</span>
              <span class="call">
                <svg
                  width="17px"
                  height="18px"
                  viewBox="0 0 17 18"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Symbols"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="help_icon-copy"
                      transform="translate(-6.000000, -5.000000)"
                      stroke="#8E8E8E"
                    >
                      <g id="Group-5" transform="translate(6.000000, 6.000000)">
                        <g
                          id="Group-4-Copy"
                          transform="translate(0.000000, 0.255060)"
                        >
                          <path
                            d="M8.5,14.45 C10.59365,14.45 12.3364211,14.360565 13.8185659,13.1069823 C15.043679,12.0707944 15.4545455,9.24269394 15.4545455,7.49545455 C15.4545455,3.65456515 12.3408894,0.540909091 8.5,0.540909091 C4.6591106,0.540909091 1.54545455,3.65456515 1.54545455,7.49545455"
                            id="Oval-3"
                            stroke-width="1.66"
                          ></path>
                          <rect
                            id="Rectangle"
                            fill="#8E8E8E"
                            x="0.886363636"
                            y="6.81312145"
                            width="3.63636364"
                            height="4.40909091"
                            rx="1.81818182"
                          ></rect>
                          <rect
                            id="Rectangle-Copy"
                            fill="#8E8E8E"
                            x="12.4773581"
                            y="6.81312145"
                            width="3.63636364"
                            height="4.40909091"
                            rx="1.81818182"
                          ></rect>
                          <path
                            d="M9.27272727,12.9949396 C8.48195593,12.9949396 7.84090909,13.6359865 7.84090909,14.4267578 C7.84090909,15.2175292 8.48195593,15.858576 9.27272727,15.858576 C10.0634986,15.858576 10.7045455,15.2175292 10.7045455,14.4267578 C10.7045455,13.6359865 10.0634986,12.9949396 9.27272727,12.9949396 Z"
                            id="Rectangle-Copy"
                            fill="#8E8E8E"
                            transform="translate(9.272727, 14.426758) rotate(90.000000) translate(-9.272727, -14.426758) "
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div class="modals_card m_ map_">
            <div class="map_view"></div>
            <p><b>Home |</b> As Shati. Jeddah, Saudi…</p>
          </div>

          <div class="modals_card m_">
            <p><b>Sun, 11/10/2020</b></p>
            <div class="set_align">
              <span class="icon_day">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 20.625C13.5082 20.625 12.0774 20.0324 11.0225 18.9775C9.96763 17.9226 9.375 16.4918 9.375 15C9.375 13.5082 9.96763 12.0774 11.0225 11.0225C12.0774 9.96763 13.5082 9.375 15 9.375C16.4918 9.375 17.9226 9.96763 18.9775 11.0225C20.0324 12.0774 20.625 13.5082 20.625 15C20.625 16.4918 20.0324 17.9226 18.9775 18.9775C17.9226 20.0324 16.4918 20.625 15 20.625ZM15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5V22.5ZM15 0C15.2486 0 15.4871 0.0987721 15.6629 0.274587C15.8387 0.450403 15.9375 0.68886 15.9375 0.9375V4.6875C15.9375 4.93614 15.8387 5.1746 15.6629 5.35041C15.4871 5.52623 15.2486 5.625 15 5.625C14.7514 5.625 14.5129 5.52623 14.3371 5.35041C14.1613 5.1746 14.0625 4.93614 14.0625 4.6875V0.9375C14.0625 0.68886 14.1613 0.450403 14.3371 0.274587C14.5129 0.0987721 14.7514 0 15 0V0ZM15 24.375C15.2486 24.375 15.4871 24.4738 15.6629 24.6496C15.8387 24.8254 15.9375 25.0639 15.9375 25.3125V29.0625C15.9375 29.3111 15.8387 29.5496 15.6629 29.7254C15.4871 29.9012 15.2486 30 15 30C14.7514 30 14.5129 29.9012 14.3371 29.7254C14.1613 29.5496 14.0625 29.3111 14.0625 29.0625V25.3125C14.0625 25.0639 14.1613 24.8254 14.3371 24.6496C14.5129 24.4738 14.7514 24.375 15 24.375V24.375ZM30 15C30 15.2486 29.9012 15.4871 29.7254 15.6629C29.5496 15.8387 29.3111 15.9375 29.0625 15.9375H25.3125C25.0639 15.9375 24.8254 15.8387 24.6496 15.6629C24.4738 15.4871 24.375 15.2486 24.375 15C24.375 14.7514 24.4738 14.5129 24.6496 14.3371C24.8254 14.1613 25.0639 14.0625 25.3125 14.0625H29.0625C29.3111 14.0625 29.5496 14.1613 29.7254 14.3371C29.9012 14.5129 30 14.7514 30 15ZM5.625 15C5.625 15.2486 5.52623 15.4871 5.35041 15.6629C5.1746 15.8387 4.93614 15.9375 4.6875 15.9375H0.9375C0.68886 15.9375 0.450403 15.8387 0.274587 15.6629C0.0987721 15.4871 0 15.2486 0 15C0 14.7514 0.0987721 14.5129 0.274587 14.3371C0.450403 14.1613 0.68886 14.0625 0.9375 14.0625H4.6875C4.93614 14.0625 5.1746 14.1613 5.35041 14.3371C5.52623 14.5129 5.625 14.7514 5.625 15ZM25.6069 4.39312C25.7826 4.56893 25.8814 4.80735 25.8814 5.05594C25.8814 5.30453 25.7826 5.54294 25.6069 5.71875L22.9556 8.37188C22.8685 8.45892 22.765 8.52794 22.6512 8.575C22.5373 8.62206 22.4153 8.64623 22.2922 8.64615C22.0434 8.64597 21.8049 8.54697 21.6291 8.37094C21.542 8.28377 21.473 8.18032 21.4259 8.06648C21.3789 7.95264 21.3547 7.83064 21.3548 7.70746C21.355 7.45868 21.454 7.22016 21.63 7.04437L24.2812 4.39312C24.4571 4.21737 24.6955 4.11864 24.9441 4.11864C25.1927 4.11864 25.4311 4.21737 25.6069 4.39312V4.39312ZM8.37 21.63C8.54575 21.8058 8.64449 22.0442 8.64449 22.2928C8.64449 22.5414 8.54575 22.7798 8.37 22.9556L5.71875 25.6069C5.54194 25.7776 5.30512 25.8721 5.05931 25.87C4.8135 25.8679 4.57837 25.7693 4.40455 25.5955C4.23073 25.4216 4.13213 25.1865 4.12999 24.9407C4.12786 24.6949 4.22235 24.4581 4.39312 24.2812L7.04437 21.63C7.22018 21.4542 7.4586 21.3555 7.70719 21.3555C7.95578 21.3555 8.19419 21.4542 8.37 21.63V21.63ZM25.6069 25.6069C25.4311 25.7826 25.1927 25.8814 24.9441 25.8814C24.6955 25.8814 24.4571 25.7826 24.2812 25.6069L21.63 22.9556C21.4592 22.7788 21.3647 22.542 21.3669 22.2962C21.369 22.0504 21.4676 21.8152 21.6414 21.6414C21.8152 21.4676 22.0504 21.369 22.2962 21.3669C22.542 21.3647 22.7788 21.4592 22.9556 21.63L25.6069 24.2812C25.7826 24.4571 25.8814 24.6955 25.8814 24.9441C25.8814 25.1927 25.7826 25.4311 25.6069 25.6069ZM8.37 8.37188C8.19419 8.54763 7.95578 8.64636 7.70719 8.64636C7.4586 8.64636 7.22018 8.54763 7.04437 8.37188L4.39312 5.71875C4.30358 5.63227 4.23216 5.52882 4.18303 5.41444C4.1339 5.30006 4.10803 5.17704 4.10695 5.05256C4.10587 4.92808 4.12959 4.80463 4.17673 4.68942C4.22387 4.5742 4.29348 4.46953 4.3815 4.3815C4.46953 4.29348 4.5742 4.22387 4.68942 4.17673C4.80463 4.12959 4.92808 4.10587 5.05256 4.10695C5.17704 4.10803 5.30006 4.1339 5.41444 4.18303C5.52882 4.23216 5.63227 4.30358 5.71875 4.39312L8.37 7.04437C8.45731 7.13146 8.52657 7.23491 8.57384 7.34881C8.6211 7.46271 8.64543 7.58481 8.64543 7.70813C8.64543 7.83144 8.6211 7.95354 8.57384 8.06744C8.52657 8.18134 8.45731 8.28479 8.37 8.37188V8.37188Z"
                    fill="#979797"
                  />
                </svg>
              </span>
              <p><b>09:00 am - 10:00 am</b></p>
            </div>
          </div>
          <div class="modals_card m_ flex_flow">
            <span class="icon_">
              <svg
                width="78px"
                height="72px"
                viewBox="0 0 78 72"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>icons8-clothes-100</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="Website"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Landing-Page-Copy-6"
                    transform="translate(-89.000000, -307.000000)"
                  >
                    <g id="Group-12">
                      <image
                        id="icons8-clothes-100"
                        x="89"
                        y="307"
                        width="78"
                        height="72"
                        xlink:href="data:image/png;base64,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"
                      ></image>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <p>Clothes</p>
          </div>
          <button class="btn btn-primary btn-block" @click="confirmTrack">
            <span>انشاء الطلب</span>
            <span class="check_">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.9979 0.887183L4.26693 11.1945L3.45269 11.1576L0 6.24127L0.843095 5.65023L3.91266 10.0197L12.2122 0.220703L13 0.887183H12.9979Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </b-modal> -->
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
// import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";
import VuePhoneNumberInput from "vue-phone-number-input";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import eventHub from "../../eventBus";
import { gmapsMap, gmapsMarker } from "x5-gmaps";

export default {
  components: {
    VuePhoneNumberInput,
    gmapsMap,
    gmapsMarker,
    // VueTimepicker,
    VueGoogleAutocomplete,
  },
  data() {
    return {
      selectedCard: {},
      checkedCard: false,
      successfulTask: false,
      loginLoading: false,
      updatePasswordLoading: false,
      taskLoading: false,
      registerLoading: false,
      customer: "",
      newCustomer: {
        name: "",
        username: "",
        password: "",
        phone: "",
        email: "",
        address: "",
        latitude: 0,
        longitude: 0,
      },
      returningCustomer: {
        latitude: "",
        longitude: "",
      },
      task: "",
      newTask: {},
      updatePassword: {
        password: "",
      },
      formattedPhone: "",
      returningCustomerFormattedPhone: "",
      passwordVisible: false,
      donations: "",
      availableDates: [],
      yourDaysArray: [
        {
          start_time: { HH: "08", mm: "00" },
          end_time: { HH: "09", mm: "00" },
        },
      ],
      errors: {},
      locationData: {},
      donationType: [],
      activeDonationType: false,
      selectedDonationCard: {},
      selectedDate: "",
      address: "",
      location: "",
      access_token: process.env.VUE_APP_MAP_ACCESS_TOKEN,
      center: [0, 0],
      map: {},
      markerOption: {
        draggable: true,
        animation: 1,
      },
    };
  },
  computed: {
    options() {
      return {
        center: {
          lat: this.newCustomer.latitude,
          lng: this.newCustomer.longitude,
        },
        zoom: 12,
      };
    },
    position() {
      return {
        lat: this.newCustomer.latitude,
        lng: this.newCustomer.longitude,
      };
    },
    donationCard() {
      return this.donationType.filter((donation) => {
        if (this.selectedDonationCard.id == donation.id) {
          return donation.id;
        }
      });
    },
  },
  props: ["signuppage"],
  mounted() {
    this.getDonationsType();
    this.getCurrentLocation();
    // this.$modal.hide("success_modal");
  },
  created() {
    eventHub.$on("customChange", this.loginModalFunc);
  },
  methods: {
    updateLocation(pos) {
      this.newCustomer.latitude = pos.lat;
      this.newCustomer.longitude = pos.lng;
      this.getCurrentAddress({ lat: pos.lat, lng: pos.lng });
    },
    makeToast() {
      this.$bvToast.toast("عفوًا ... خطأ في إنشاء المهمة", {
        title: `خطأ`,
        variant: "danger",
        solid: true,
      });
    },
    showEvent(e) {
      console.log({ event: e });
    },
    checkDonationType() {},
    getAddressData(addressData, placeResultData) {
      this.newCustomer.address = placeResultData.formatted_address;
      this.newCustomer.latitude = addressData.latitude;
      this.newCustomer.longitude = addressData.longitude;
      this.center[0] = addressData.latitude;
      this.center[1] = addressData.longitude;
    },
    async getCurrentAddress(location) {
      this.newCustomer.address = "Riyadh, Saudi Arabia";
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${process.env.VUE_APP_GOOGLE_API_KEY}`;

      try {
        let res = await this.$http.get(url);
        console.log({ address: res.data.results[0].formatted_address });

        this.newCustomer.address = res.data.results[0].formatted_address;
        if (!this.newCustomer.address) {
          this.newCustomer.address = "Riyadh, Saudi Arabia";
        }
      } catch (error) {
        console.log({ error });
        if (!this.newCustomer.address) {
          this.newCustomer.address = "Riyadh, Saudi Arabia";
        }
      }
    },
    async updatePasswordFunc() {
      this.updatePasswordLoading = true;
      let url = `https://apiv1.kiswaksa.com/api/customer/update-password`;
      let payload = {};
      payload.email = this.customer.email;
      payload.new_password = this.updatePassword.passowrd;
      try {
        let res = await this.$http.post(url, payload);
        console.log({ PassWordUpdate: res });
        this.updatePasswordLoading = false;
      } catch (error) {
        console.log(error);
        this.updatePasswordLoading = false;
      }
    },
    loginModalFunc(value) {
      if (value == true) {
        this.$refs["login_modal"].show();
      }
    },
    result(e) {
      console.log({ e });
    },
    hideTaskModal() {
      this.$refs["task_modal"].hide();
    },
    async createMap(value) {
      console.log({ center: value });
      try {
        mapboxgl.accessToken = this.access_token;
        this.map = new mapboxgl.Map({
          container: "map_wrapp",
          style: "mapbox://styles/mapbox/streets-v11",
          center: value,
          zoom: 11,
        });

        let geocoder = new MapboxGeocoder({
          accessToken: this.access_token,
          mapboxgl: mapboxgl,
          marker: false,
        });

        geocoder.on("result", (e) => {
          const marker = new mapboxgl.Marker({
            draggable: true,
            color: "#D80739",
          })
            .setLngLat({ lat: value.lat, lng: value.lng })
            .addTo(this.map);
          marker.on("dragend", () => {
            this.center = Object.values(e.target.getLngLat());
          });
        });
      } catch (err) {
        console.log("map error", err);
      }
    },
    async getCurrentLocation() {
      let res = await this.$getLocation();
      this.getCurrentAddress(res);
      console.log({ coordinates: res });
      this.newCustomer.latitude = res.lat;
      this.newCustomer.longitude = res.lng;
      this.returningCustomer.latitude = res.lat;
      this.returningCustomer.longitude = res.lng;
      this.center[0] = res.lat;
      this.center[1] = res.lng;
    },
    onUpdate(e) {
      console.log({ e });
      if (e.formattedNumber) {
        console.log({ phoneNumber: e.formattedNumber });
        this.formattedPhone = e.formattedNumber;
        // this.profile.phone = e.formattedNumber
      }
    },
    setDonationType(e, card) {
      this.selectedDonationCard = card;
      console.log({ donationType: this.donationType });
    },
    registerCustomer() {
      this.registerLoading = true;
      this.newCustomer.phone = this.formattedPhone;
      this.customer = this.newCustomer;
      localStorage.setItem("customer", this.newCustomer);
      this.getAvailableDates();
      this.$refs["task_modal"].show();
      setTimeout(() => {
        this.registerLoading = false;
      }, 3000);
    },
    async loginCustomer() {
      this.loginLoading = true;
      let url = `https://apiv1.kiswaksa.com/api/customer/login`;
      if (!this.returningCustomer.address) {
        this.returningCustomer.address = "Abu Dhabi";
      }

      this.returningCustomer.phone = this.returningCustomerFormattedPhone;
      let payload = {};
      payload.email = this.returningCustomerFormattedPhone;
      payload.password = this.returningCustomerFormattedPhone;
      try {
        let res = await this.$http.post(url, payload);
        console.log({ loginCustomer: res });
        this.customer = res.data.data.user;
        let token = res.data.data.token;

        localStorage.setItem("token", token);
        localStorage.setItem("customer", res.data.data.user);
        if (token) {
          this.getAvailableDates();
          this.createLocation(
            this.returningCustomer.address,
            this.returningCustomer.latitude,
            this.returningCustomer.longitude
          );
        }
        this.loginLoading = false;
        this.$refs["task_modal"].show();
        this.$refs["login_modal"].hide();
      } catch (error) {
        this.loginLoading = false;
        console.log(error);
      }
    },
    async createtask() {
      this.taskLoading = true;
      let url = `https://services.kiswaksa.com/api/task/create`;
      let payload = {};
      payload.name = this.newCustomer.name
      payload.phone = this.formattedPhone;
      payload.address = this.newCustomer.address;
      payload.country = "KSA";
      payload.created_by = "Website";


      try {
        let res = await this.$http.post(url, payload);
        this.$refs["task_modal"].hide();
        this.$router.push("/success");
        this.newCustomer.name = "";
        this.newCustomer.phone = "";
        this.newCustomer.address = "";
        this.taskLoading = false;
        console.log(res);
      } catch (error) {
        this.taskLoading = false;
        this.$refs["task_modal"].hide();
        this.makeToast();
        this.newCustomer.name = "";
        this.newCustomer.phone = "";
        this.newCustomer.address = "";
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    async createLocation(address, latitude, longitude) {
      let url = `https://apiv1.kiswaksa.com/api/customer/locations`;
      let payload = { is_default: "1", title: "Home" };
      payload.address = address;
      payload.latitude = latitude;
      payload.longitude = longitude;
      try {
        let res = await this.$http.post(url, payload);
        this.locationData = res.data.data;
        localStorage.setItem("location", this.locationData);
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    async getDonationsType() {
      let url = `https://apiv1.kiswaksa.com/api/donation-types`;
      try {
        let res = await this.$http.get(url);
        this.donations = res.data.data.data;
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    async getAvailableDates() {
      let url = `https://apiv1.kiswaksa.com/api/web-dates?lat=${this.newCustomer.latitude}&lng=${this.newCustomer.longitude}`;
      try {
        let res = await this.$http.get(url);
        console.log({ AvailableDates: res });
        this.availableDates = res.data.data;
        this.availableDates.shift();
        localStorage.setItem("availableDates", this.availableDates);
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    togglePasswordVisibility() {
      !this.passwordVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.success-img {
  width: 80px;
  height: 80px;
}
.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  box-shadow: none !important;
}
.form_body {
  z-index: 1;
  p {
    margin: 10px 0;
    text-align: right;
    color: $text-color;
    font-weight: 500;
    a {
      color: $primary-color;
    }
  }
}
.map_ {
  .form-control {
    position: relative;
    z-index: 1;
  }
}
.map_wrapp {
  background: $shade;
  height: 145px;
  position: relative;
  top: -10px;
  border-radius: 0 0 9px 9px;
}
.form-group {
  p {
    span {
      color: $primary-color;
      cursor: pointer;
    }
  }
}
</style>