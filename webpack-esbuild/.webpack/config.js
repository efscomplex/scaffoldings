export default {
   enviroments: {
      dev: '',
      staging: 'https://api-staging.i-con.app',
      accounting: 'https://accounting-staging.i-con.app',
      production: ''
   },
   services: {
      customers: 'customers',
      policies: 'policies',
      claims: 'claims',
      search: {
         url: 'search',
         order: 'DESC',
         limit: 2
      },
      customerEvents: 'customer-events',
      items: {
         url: 'items',
         category: 'MOBILE'
      },
      countries: 'countries',
      fmip: 'fmip',
      repairCenters: 'repair-centers',
      complaints: 'complaints',
      insured_items: 'insured_items',
      sendMailFrom: 'jaime.perdigo@i-surance.es',
      notes: 'tickets',
      file: 'file',
      claimValidation: 'claims/validate',
      claimInvalidation: 'claims/invalidate',
      claimReactivate: 'claims/reopen',
      rejection: 'claims/reject',
      updateContext: 'claims/context',
      payments: 'payments',
      exportPayments: 'sepa/export/payment',
      exportCharges: 'sepa/export/charges',
      importPayments: 'sepa/import/payments',
      bankAccountDetails: 'bank-account-details',
      paymentFile: 'payment/file',
      historicTypes: 'types',
      shops: 'partner-centers-list',
      shop: 'partner-centers',
      importShops: 'parser-and-save-shops',
      users: 'users',
      user: 'user',
      importUsers: 'parser-and-save-users',
      parseProgram: 'check-parser-partner-programs',
      saveProgram: 'parser-and-save-partner-programs',
      warehouses: 'warehouses',
      insurancePrograms: 'insurance_programs',
      partnerPrograms: 'partner-programs',
      winBack: 'policies/program/change',
      insuranceAccount: 'isurance-accounts',
      paymentStatus: 'payment-status',
      contractValidation: 'policies/manual-validation',
      warranty: 'claims/warranty-to-isurance',
      reorder: 'claims/reorder',
      answerQuestion: 'workorders/answer-question',
      otherItems: 'other_items/validate',
      createInsuredItem: 'insured_items',
      complaintCategories: 'complaints-categories',
      sendEmailWithTemplate: 'send-email-with-template',
      getTemplate: 'get-template',
      customerExperiences: 'customer_experiences',
      enableItem: 'insured_items/enable',
      accountsDetail: 'isurance-account-cockpit',
      cancelPolicy: 'policies/cancellation',
      policyDocuments: 'policies-documents',
      partnerConfiguration: 'configuration/partner',
      addPartnerConfiguration: 'create-partner-and-config',
      updatePartnerConfiguration: 'update-partner-and-config',
      products: 'products'
   },
   entities: {
      POLICY: 'Policy'
   },
   tables: {
      elementsPerPage: 14
   },
   auth: {
      url: 'https://i-surance.eu.auth0.com/oauth/token',
      recoverUrl:
         'https://i-surance.eu.auth0.com/dbconnections/change_password',
      credentials: {
         grant_type: 'password',
         client_id: 'v5cfQRrNHPFAZ0UKq9aw0zTzM1HZ2A2o',
         client_secret:
            'krgcr5fPB655C8urNB0KZlN80osEnIax-Ztm-hBG9bsrpsLj8l73W9OIK6CTs83b',
         audience: 'https://i-surance.eu.auth0.com/api/v2/',
         username:
            process.env.NODE_ENV === 'test' ? process.env.USERNAMEICON : '',
         password:
            process.env.NODE_ENV === 'test' ? process.env.PASSWORDICON : '',
         connection: 'i-surance'
      }
   },
   maps: {
      mapsUrl: 'https://maps.googleapis.com/maps/api/js',
      apiKey: 'AIzaSyAfyv5wGhqlaWyQhx2qL2SakpANpR9PMJo',
      extraParams: 'v=3.exp&libraries=geometry,drawing,places'
   },
   UI: {
      topBanner: false,
      showComplaintCard: {
         partners: [
            {
               name: 'digitec',
               show: true
            },
            {
               name: 'smarttalk',
               show: true
            },
            {
               name: 'adtyre',
               show: true
            },
            {
               name: 'yallo',
               show: true
            },
            {
               name: 'monaco',
               show: true
            },
            {
               name: 'tipo',
               show: true
            }
         ]
      },
      cancelPolicy: {
         SALT: true,
         MONACO: true,
         ADTYRE: true,
         BOOTS: false,
         CHECK24: true,
         DELTICOM: true,
         DIGITEC: true,
         FEXCOM: false,
         FNAC: false,
         KIND_AT: false,
         KIND_LU: false,
         SMARTTALK: false,
         UPC: false,
         XIAOMI_PT: false,
         YALLO: true
      },
      validatePolicy: {
         FNAC: true,
         UPC: true,
         SALT: false,
         MONACO: false,
         ADTYRE: false,
         BOOTS: false,
         CHECK24: false,
         DELTICOM: false,
         DIGITEC: false,
         FEXCOM: false,
         KIND_AT: false,
         KIND_LU: false,
         SMARTTALK: false,
         XIAOMI_PT: false,
         YALLO: false
      },
      validatePolicyStatus: {
         30204: true,
         30201: true
      },
      validatePolicyStatusToShowInPopup: {
         30204: true
      }
   },
   checkmark,
   languages: ['en'],
   emailTemplateLanguages: ['en', 'es', 'it', 'fr', 'de', 'pt'],
   googleAnalyticsCode: 'UA-133200243-1',
   statisticsIframeUrl: 'https://i-con.app/grafana/',
   externalResources: {
      links: {
         productTable:
            'https://isuranceag.sharepoint.com/:x:/s/i-surance/Eby8_Qsii5pMlORPzZjWeCABUSvP1BiBbR0EBEB61-U_Rw?e=tKz5LS',
         users:
            'https://isuranceag.sharepoint.com/:x:/s/i-surance/EZLM0LtvomdJnMxbmF6ynBYB66EVwpJ9_rdsbQBD_irAPg?e=I6fSpZ',
         shops:
            'https://isuranceag.sharepoint.com/:x:/s/i-surance/ERUy6nm6gwtKp__rTOs4RGwB4iuwkVkukKEEBTY63wGaIg?e=yJteTV'
      }
   }
}
