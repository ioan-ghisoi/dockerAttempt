
export default {
  value: {
    url: {
      magento_base: 'http://127.0.0.1/magento22',
      admin_path: '/admin',
      catalog_path: '/admin/div._required:nth-child(1) > div:nth-child(2) > input:nth-child(1)/product/',
      payments_path: '/admin/admin/system_config/edit/section/payment/',
      product_path: '/ckoproduct.html',
      sign_in_path: '/customer/account/login/',
      sign_out_path: '/customer/account/logout/',
      sign_up_path: '/customer/account/create/',
      orders_path: '/admin/sales/order/',
      invoices_path: '/admin/sales/invoice/',
      test_product_path: '/admin/catalog/product/edit/id/6/',
      cache_path: '/admin/admin/cache/',
      create_product_path: '/admin/catalog/product/new/set/4/type/simple/',
    },
    admin: {
      username: 'admin',
      password: 'Checkout17',
      three_d_password: 'Checkout1!',
      secret_key: 'sk_test_404618d6-50b6-45d2-a151-51682378b266',
      public_key: 'pk_test_ba03a6e6-d55c-43c9-8d7e-ee6a9c9bcdc3',
      private_shared_key: '130941e0-7403-4738-bb5e-45362cd948bd',
    },
    guest: {
      email: 'john@smith.com',
      name: 'John',
      lastname: 'Smith',
      address: '42 Ealing Broadway',
      city: 'City',
      county: '1',
      postcode: '85001',
      phone: '07123456789',
    },
    customer: {
      email: 'test@checkout.com',
      name: 'Test',
      lastname: 'Checkout',
      street: '1 Wall Street',
      city: 'London',
      country: 'GB',
      phone: '07987654321',
      password: 'Checkout17',
    },
    card: {
      visa: {
        card_number: '4242424242424242',
        month: '06',
        year: '18',
        cvv: '100',
      },
      mastercard: {
        card_number: '5436031030606378',
        month: '06',
        year: '25',
        cvv: '257',
      },
      amex: {
        card_number: '345678901234564',
        month: '06',
        year: '25',
        cvv: '1051',
      },
      diners: {
        card_number: '30123456789019',
        month: '06',
        year: '25',
        cvv: '257',
      },
      jcb: {
        card_number: '3530111333300000',
        month: '06',
        year: '18',
        cvv: '100',
      },
      discover: {
        card_number: '6011111111111117',
        month: '06',
        year: '18',
        cvv: '100',
      },
    },
    timeout_out: 120000,
    resolution_w: 1920,
    resolution_h: 3000,
    title: 'Test',
    vaut_title: 'Test Vult',
    sort_order: 0,
    new_order_status: 'complete',
    theme_color: '#eaeaea',
    button_label: 'johnny',
    fieldset_block: 'fieldset_block-content-loading',
    new_product_name: 'ckoproduct',
    new_product_price: '123',
    new_product_quantity: '999',
    new_product_stock: '1',
  },
  selector: {
    frontend: {
      order: {
        loader: '.loading-mask',
        ajax_loader: 'ajax-loading',
        add_product: '#product-addtocart-button',
        product_counter: 'span.counter:nth-child(2)',
        cart: '.showcart',
        go_to_checkout: '#top-cart-btn-checkout',
        go_to_payment: '.button',
        checkout_page_loader: '#checkout-loader',
        customer_email: '#customer-email',
        email_fieldset: '#customer-email-fieldset',
        customer_firstname: '[name="firstname"]',
        customer_lastname: '[name="lastname"]',
        customer_street: '[name="street[0]"]',
        customer_county: '[name="region_id"]',
        customer_city: '[name="city"]',
        customer_postcode: '[name="postcode"]',
        customer_phone: '[name="telephone"]',
        shipping_method: '#s_method_flatrate',
        terms: '#agreement_1',
        terms_hosted: 'div.checkout-agreements-block:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)',
        checkout_payment_option: '#checkout_com',
        checkout_embedded_form: '#embeddedForm',
        checkout_iframe_selector: '#cko-iframe-id',
        embedded_fields: {
          card_number: "input[data-checkout='card-number']",
          month: "input[data-checkout='expiry-month']",
          year: "input[data-checkout='expiry-year']",
          cvv: "input[data-checkout='cvv']",
        },
        last_order_number: 'tr.data-row:nth-child(1) > td:nth-child(4) > div:nth-child(1)',
        place_order_button: '#placeOrder',
        checkout_success_message: '.checkout-success',
        order_number: '.checkout-success > p:nth-child(1) > span:nth-child(1)',
        three_d_password: '#txtPassword',
        three_d_submit: '#txtButton',
        hosted_place_order: '#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button',
        shipping_option: '#s_method_freeshipping_freeshipping',
      },
      registration: {
        firstname: '#firstname',
        lastname: '#lastname',
        email: '#email_address',
        password: '#password',
        confirm_password: '#password-confirmation',
        submit: '.submit',
        success: '.message-success > div:nth-child(1)',
        address_tab: 'ul.nav > li:nth-child(3) > a:nth-child(1)',
        street: '#street_1',
        country: '#country',
        city: '#city',
        phone: '#telephone',
        save: '.save',
      },
      hosted: {
        card_number: 'div.input-group:nth-child(2) > input:nth-child(2)',
        month: 'div.split-view:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
        year: 'div.split-view:nth-child(2) > div:nth-child(2) > input:nth-child(1)',
        cvv: 'div.split-view:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)',
        title: '',
        pay_button: '.form-submit',
        hosted_header: '#modal-wrapper > div.cko-md-content > div > div.header',
        hosted_pay_button: '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content.card > form > input',
        hosted_alt_payments_tab: '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.tabs.split-view > div.tab.lp.fragment-2.enter',
        hosted_card_tab: '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.tabs.split-view > div.tab.active.card',
        hosted_region_selector: '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.region-selector',
      },
      sign_in_email: 'div.email:nth-child(2) > div:nth-child(2) > input:nth-child(1)',
      sign_in_password: 'div.field:nth-child(3) > div:nth-child(2) > input:nth-child(1)',
      sign_in_button: 'button.login',
      logged_in_name: 'ul.header:nth-child(2) > li:nth-child(2) > span:nth-child(1) > span:nth-child(1)',
      sign_out: 'li.active > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)',
      checkout_option_title: 'div.payment-method:nth-child(2) > div:nth-child(1) > label:nth-child(2) > span:nth-child(1)',
    },
    backend: {
      admin_username: '#username',
      admin_password: '#login',
      admin_sign_in: '.action-login',
      other_payments: '#payment_us_other_payment_methods-head',
      plugin: {
        selector: '#payment_us_checkout_com-head',
        save: '#save',
        basic_category: {
          selector: '#payment_us_checkout_com_checkout_com_base_settings-head',
          environment: '#payment_us_checkout_com_checkout_com_base_settings_environment',
          title: '#payment_us_checkout_com_checkout_com_base_settings_title',
          sort_order: '#payment_us_checkout_com_checkout_com_base_settings_sort_order',
          new_order_status: '#payment_us_checkout_com_checkout_com_base_settings_new_order_status',
          auto_invoices: '#payment_us_checkout_com_checkout_com_base_settings_auto_generate_invoice',
          integration: '#payment_us_checkout_com_checkout_com_base_settings_integration',
          theme: '#payment_us_checkout_com_checkout_com_base_settings_embedded_theme',
          css_file: '#payment_us_checkout_com_checkout_com_base_settings_css_file',
          hosted_theme_color: '#payment_us_checkout_com_checkout_com_base_settings_theme_color',
          hosted_payment_mode: '#payment_us_checkout_com_checkout_com_base_settings_payment_mode',
          hosted_button_label: '#payment_us_checkout_com_checkout_com_base_settings_button_label',
          hosted_header: '#modal-wrapper > div.cko-md-content > div > div.header',
          hosted_pay_button: '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content.card > form > input',
          hosted_alt_payments: '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.tabs.split-view > div.tab.lp.fragment-2.enter',
        },
        advanced_category: {
          selector: '#payment_us_checkout_com_checkout_com_advanced_settings-head',
          cvv_vetification: '#payment_us_checkout_com_checkout_com_advanced_settings_useccv',
          vault: '#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_active',
          save_cards_authomatically: '#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_autosave',
          hide_card_storage: '#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_hide_storage',
          vaut_title: '#payment_us_checkout_com_checkout_com_advanced_settings_checkout_com_cc_vault_title',
          three_d: '#payment_us_checkout_com_checkout_com_advanced_settings_verify_3dsecure',
          autocapture: '#payment_us_checkout_com_checkout_com_advanced_settings_auto_capture',
          autocap_time: '#payment_us_checkout_com_checkout_com_advanced_settings_auto_capture_time',
        },
        order_category: {
          selector: '#payment_us_checkout_com_checkout_com_order_settings-head',
          order_creation: '#payment_us_checkout_com_checkout_com_order_settings_order_creation',
          order_comments: '#payment_us_checkout_com_checkout_com_order_settings_order_comments_override',
          new_order_status: '#payment_us_checkout_com_checkout_com_order_settings_new_order_status',
          authorised_order_status: '#payment_us_checkout_com_checkout_com_order_settings_order_status_authorized',
          captured_order_status: '#payment_us_checkout_com_checkout_com_order_settings_order_status_captured',
          refund_order_status: '#payment_us_checkout_com_checkout_com_order_settings_order_status_refunded',
          flagged_order_status: '#payment_us_checkout_com_checkout_com_order_settings_order_status_flagged',
          auto_generated_invoice: '#payment_us_checkout_com_checkout_com_order_settings_auto_generate_invoice',
        },
        keys_category: {
          selector: '#payment_us_checkout_com_checkout_com_account_keys-head',
          public: '#payment_us_checkout_com_checkout_com_account_keys_public_key',
          secret: '#payment_us_checkout_com_checkout_com_account_keys_secret_key',
          private_shared: '#payment_us_checkout_com_checkout_com_account_keys_private_shared_key',
        },
      },
      last_order: 'tr.data-row:nth-child(1) > td:nth-child(2) > div:nth-child(1)',
      order_comments: '#sales_order_view_tabs_order_history',
      catured_comment_1: '#Order_History > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)',
      catured_comment_2: '#Order_History > section:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)',
      stores: '#menu-magento-backend-stores',
      configuration: '.item-system-config',
      advanced: 'div.config-nav-block:nth-child(6) > div:nth-child(1)',
      admin: 'div.config-nav-block:nth-child(6) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
      admin_security: '#admin_security-head',
      admin_security_key: '#admin_security_use_form_key_inherit',
      security_key_option: '#admin_security_use_form_key',
      test_product_quantity: 'fieldset.admin__field:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
      test_product_stock: 'div.admin__field:nth-child(8) > div:nth-child(2) > select:nth-child(1)',
      test_product_save: '#save-button',
      admin_loader: '.admin__form-loading-mask',
      flash_catch: '#flush_magento',
      new_product_name: 'div._required:nth-child(3) > div:nth-child(2) > input:nth-child(1)',
      new_product_price: 'div._required:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
      new_product_quantity: 'fieldset.admin__field:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
      new_product_stock: 'div.admin__field:nth-child(8) > div:nth-child(2) > select:nth-child(1)',
      new_product_load_mask: '.admin__form-loading-mask',
      save_success_message: 'div.message:nth-child(1)',
    },
  },
};
