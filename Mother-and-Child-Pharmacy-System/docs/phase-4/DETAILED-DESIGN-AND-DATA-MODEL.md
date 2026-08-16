# Detailed Design and Data Model

## 1) هدف التصميم التفصيلي

هذا التصميم يترجم متطلبات BRD وSRS إلى هيكل نظام قابل للتنفيذ فعليًا. يركز على النواة الأساسية للصيدلية: المنتج، المخزون، المشتريات، نقطة البيع، المبيعات، المرتجعات، الصندوق، والتدقيق.

---

## 2) حدود النظام

### النطاق داخل المشروع
- إدارة كتالوج الأدوية
- إدارة الدفعات والتاريخ
- المشتريات والموردين
- المخزون والورديات
- المبيعات والدفعات
- المرتجعات
- التقارير الأساسية
- سجل التدقيق
- جسر مريض بسيط وأرشفة وصفة ورقية

### ما هو خارج النطاق في هذه المرحلة
- نظام عيادة كامل
- جدول أطباء متقدم
- توظيف/رواتب الأطباء
- الوصفات الإلكترونية
- الحجز الطبي والتنسيق بين المريض والطبيب

---

## 3) نموذج النظم العالي

### 3.1 الوحدات الرئيسية

1. Authentication & Authorization
   - المستخدمون
   - الصلاحيات
   - الأدوار
   - جلسات الدخول

2. Product Management
   - المنتج
   - الفئة
   - الكود الداخلي
   - الباركود
   - سعر الشراء/البيع

3. Inventory Management
   - Batch
   - Stock Ledger
   - Expiry validation
   - FEFO recommendation

4. Purchase Management
   - Supplier
   - Purchase Invoice
   - Purchase Item
   - Payment status

5. POS Sales
   - Invoice
   - Invoice Item
   - Payment
   - Receipt

6. Returns
   - Return
   - Return Item
   - Original invoice linkage

7. Shift & Cash
   - Shift
   - Cash Drawer
   - Cash movement
   - Reconciliation

8. Audit & Reporting
   - Audit Log
   - Dashboard data
   - Reports

9. Patient Lite & Prescription Archive
   - Patient record
   - Prescription document
   - Attachment to invoice or patient

---

## 4) النموذج الكياني الأساسي

### 4.1 Users
- id
- full_name
- username
- password_hash
- role_id
- branch_id
- is_active
- created_at
- updated_at

### 4.2 Roles
- id
- name
- description

### 4.3 Branches
- id
- name
- city
- address
- phone
- is_active

### 4.4 Products
- id
- sku
- barcode
- arabic_name
- english_name
- category_id
- manufacturer
- generic_name
- unit_of_sale
- reorder_level
- is_active
- created_by
- created_at

### 4.5 Product Categories
- id
- name
- parent_category_id
- description

### 4.6 Suppliers
- id
- name
- contact_name
- phone
- email
- address
- tax_number
- is_active

### 4.7 Purchase Invoices
- id
- supplier_id
- branch_id
- invoice_number
- invoice_date
- due_date
- currency
- exchange_rate
- subtotal
- tax_amount
- total_amount
- status
- created_by
- created_at

### 4.8 Purchase Invoice Items
- id
- purchase_invoice_id
- product_id
- batch_id
- quantity
- unit_cost
- discount_amount
- expiry_date
- total_cost

### 4.9 Batches
- id
- product_id
- supplier_id
- batch_number
- expiry_date
- quantity_received
- quantity_available
- purchase_price
- currency
- received_at
- status

### 4.10 Stock Ledger
- id
- product_id
- batch_id
- movement_type
- reference_type
- reference_id
- quantity_delta
- unit_cost
- currency
- description
- created_by
- created_at

### 4.11 Sales Invoices
- id
- invoice_number
- branch_id
- shift_id
- customer_id
- total_amount
- discount_amount
- tax_amount
- paid_amount
- payment_status
- status
- exchange_rate
- created_by
- created_at

### 4.12 Invoice Items
- id
- invoice_id
- product_id
- batch_id
- quantity
- unit_price
- discount_amount
- total_amount
- expiry_date

### 4.13 Payments
- id
- invoice_id
- payment_method
- amount
- currency
- status
- reference_number
- created_by
- created_at

### 4.14 Returns
- id
- original_invoice_id
- branch_id
- return_number
- return_reason
- total_amount
- status
- created_by
- created_at

### 4.15 Return Items
- id
- return_id
- invoice_item_id
- product_id
- batch_id
- quantity
- unit_price
- total_amount

### 4.16 Shifts
- id
- branch_id
- opened_by
- opened_at
- closed_by
- closed_at
- opening_cash
- closing_cash
- status

### 4.17 Cash Drawers
- id
- shift_id
- drawer_name
- opening_balance
- closing_balance
- current_balance

### 4.18 Audit Logs
- id
- entity_type
- entity_id
- action
- old_value
- new_value
- performed_by
- performed_at
- ip_address
- notes

### 4.19 Patients
- id
- full_name
- phone
- gender
- date_of_birth
- allergies
- chronic_diseases
- notes
- created_by
- created_at

### 4.20 Prescription Documents
- id
- patient_id
- invoice_id
- document_type
- file_path
- file_hash
- uploaded_by
- uploaded_at
- review_status
- notes

---

## 5) العلاقات الأساسية

- مستخدم -> دور
- مستخدم -> فرع
- فرع -> وردية
- فرع -> مورّد
- منتج -> فئة
- منتج -> دفعات
- منتج -> كميات في رصيد المخزون
- دفعة -> حركة مخزون
- فاتورة شراء -> عناصر شراء
- فاتورة بيع -> عناصر بيع
- فاتورة بيع -> دفعات
- فاتورة بيع -> مدفوعات
- فاتورة بيع -> مرتجع
- مريض -> وصفة
- وصفة -> فاتورة

---

## 6) قواعد العمل المهمة

### 6.1 FEFO
عند البيع، يتم اختيار Batch الأقرب إلى تاريخ انتهاء الصلاحية، وإذا لم يتوفر، يمنع النظام البيع.

### 6.2 No Silent Delete
لا يحق للحذف الصامت لأي حركة مالية أو مخزنية. يتم إلغاءها أو عكسها عبر سجل جديد.

### 6.3 Human Import Approval
لا يتم تحديث المخزون بناءً على ملف مستورد دون مراجعة بشرية ومعاينة أولية.

### 6.4 Human and System Audit
كل تعديل على السعر أو المنتج أو المخزون أو الدفعة يجب أن يخرج في Audit Log.

### 6.5 Offline-First Storage
يجب حفظ جميع المعاملات محليًا فورًا، مع عملية نسخ احتياطي دورية.

---

## 7) طبقات التطبيق

### 7.1 Authentication & Access
- login/logout
- role-based permissions
- session management
- password policy

### 7.2 Product Services
- create/update/search product
- product price and supplier mapping
- stock threshold alerts

### 7.3 Purchase Services
- supplier management
- invoice creation
- stock receipt and batch creation
- payment handling

### 7.4 Inventory Services
- stock count
- batch expiry validation
- transfer verification
- stock ledger generation

### 7.5 POS Services
- add product to invoice
- apply discount
- calculate totals
- finalize payment
- print receipt

### 7.6 Return Services
- return from original invoice
- reverse quantity
- restore stock or adjust cost

### 7.7 Reporting Services
- daily sales report
- stock report
- batch expiry report
- shift closure report

### 7.8 Audit Services
- change history queries
- suspicious action tracing
- log export

---

## 8) سير العمل الرئيسي

### 8.1 دورة الشراء
1. إنشاء Supplier
2. إدخال Purchase Invoice
3. إدخال عناصر الشراء
4. إنشاء Batch وحقول الصلاحية
5. تحديث المخزون
6. تسجيل حركة Stock Ledger
7. تسجيل الدفع أو الدين

### 8.2 دورة البيع
1. فتح Shift
2. بدء Invoice
3. اختيار منتج/دفعة
4. التحقق من المخزون
5. تطبيق FEFO
6. الدفع
7. نهائية الفاتورة
8. إنشاء Receipt
9. إغلاق Shift

### 8.3 دورة المرتجع
1. فتح الفاتورة الأصلية
2. اختيار العنصر المرتجع
3. إنشاء Return
4. تحديث المخزون
5. التوثيق في Audit Log

---

## 9) الحقول الأساسية للواجهة

### شاشة Sales POS
- البحث عن المنتج
- الباركود
- الكمية
- السطر في الفاتورة
- سعر البيع
- المجموع
- الدفع
- إلغاء أو حذف سطر

### شاشة Product
- اسم المنتج
- اسم إنجليزي
- كود داخلي
- باركود
- سعر شراء
- سعر بيع
- الحد الأدنى
- المورد
- الفئة

### شاشة Batch
- رقم الدفعة
- تاريخ الصلاحية
- الكمية المتاحة
- الحاجة للتحديث

### شاشة Supplier
- اسم المورد
- جهة الاتصال
- الهاتف
- العنوان
- رقم الضريبة

---

## 10) إعدادات الأمان

- جميع الصلاحيات مستندة إلى Role
- المدير فقط يملك تحرير الأسعار أو حذف السجلات
- الكاشير لا يملك الوصول إلى إعدادات المخزون
- المحاسب يملك تقارير النقد والديون
- المدقق يملك فقط قراءة سجل التدقيق

---

## 11) النسخ الاحتياطي واستعادة البيانات

### RPO / RTO
- يتم تحديده لاحقًا بالتوافق مع المالك
- القاعدة العملية: نسخة محلية يومية + نسخ لقطة منتظمة
- استرداد يعيد الحالة قبل الخسارة مباشرة عند الحاجة

---

## 12) قائمة المهام التنفيذية المقترحة

### الجيل الأول
- User Management
- Branch and Role setup
- Product catalog
- Batch and stock ledger
- Purchase and supplier flow
- Sales and invoice creation
- Returns and shift closure
- Reports and audit log

### الجيل الثاني
- OCR/import review screen
- prescription archive
- patient lite registration
- enhanced reporting
- optional multi-branch synchronization

---

## 13) الخلاصة

النظام المقترح هو منصة صيدلية محلية بالكامل وقابلة للتوسع مستقبلاً، مع تركيز حاسم على سلامة المخزون، الشفافية، التدقيق، ومقاومة ضعف الإنترنت. يعتمد التصميم على نموذج بيانات واضح، وأدوار دقيقة، ومؤشرات مالية متعلقة بالوردية والمبيعات والمرتجعات.

المرحلة التالية المنطقية هي تحويل هذا التصميم إلى:
- كود هيكلي أولي
- قاعدة بيانات أولية
- خدمات أساسية
- واجهات POS الأساسية
- أحزمة اختبار أولية
