بالنسبة **لتصميم النظام**، في البرومبت الحالي موجود جزء جيد، لكن أنصح أن نجعله أعمق؛ لأن تصميم مشروع بهذا الحجم ينقسم إلى **نوعين مختلفين يجب أن يسيرا معًا**:

1. **System Design / Architecture**: كيف يعمل النظام من الداخل، وكيف تتصل العيادة بالصيدلية والمخزون والمحاسبة والـPOS.
2. **UX/UI Design**: ماذا يرى المستخدم، وكيف ينتقل بين الشاشات، وأين الأزرار والجداول والتنبيهات والألوان والخطوط.

ولا نريد أن يبدأ المصمم برسم Dashboard جميلة قبل أن يعرف كيف يعمل المستخدم الحقيقي.

### المسار الصحيح لتصميم النظام

نضيف إلى البرومبت أن التصميم يمر بهذه السلسلة:

**User Research**
→ **Business Workflow**
→ **Information Architecture**
→ **User Journey**
→ **Screen Inventory**
→ **Low-Fidelity Wireframes**
→ **Workflow Validation**
→ **Design System**
→ **High-Fidelity UI**
→ **Interactive Prototype**
→ **Usability Testing**
→ **Developer Handoff**

يعني مثلًا لا نقول:

> صمم شاشة الصيدلية.

بل نبدأ بالصيدلي نفسه.

ما أكثر شيء يفعله؟

* يبحث عن دواء.
* يمسح Barcode.
* يعرف الكمية.
* يعرف الـBatch.
* يعرف انتهاء الصلاحية.
* يضيف المنتج.
* يختار المريض إذا لزم.
* يربط وصفة.
* يقبل الدفع.
* يطبع الإيصال.
* يعمل Return.
* يبحث عن فاتورة قديمة.

وبناءً على ذلك يتم تصميم شاشة الـPOS.

### مثال شاشة Pharmacy POS

بدل Dashboard مليئة بالمربعات، قد يكون التصميم:

**أعلى الشاشة**

اسم الفرع
اسم الصيدلي
الوردية الحالية
الوقت
حالة الاتصال

ثم مربع كبير:

**Scan barcode or search medicine**

ثم نتائج البحث تعرض:

اسم الدواء
Generic Name
Strength
Available Quantity
Nearest Expiry
Price

وفي الجانب الآخر:

### Current Sale

Medicine X
2 × 4.500

Medicine Y
1 × 2.000

Subtotal
Discount
Tax
Total

ثم أزرار واضحة:

**Cash**

**Card**

**Split Payment**

وبجواره:

**Suspend**

**Return**

**Prescription**

ولا نضع 40 زرًا أمام الصيدلي طوال الوقت.

---

## والأهم: Contextual UI

أي وظيفة لا يحتاجها المستخدم في اللحظة الحالية لا تظهر له بلا داعٍ.

مثلاً الصيدلي عندما يقوم ببيع منتج لا يحتاج أن يرى:

* Chart of Accounts
* Supplier Aging
* Server Logs
* User Roles

هذه تخص مستخدمين آخرين.

---

# Doctor Workspace

واجهة الطبيب يجب أن تكون مختلفة تمامًا.

مثلًا:

### Patient Header

Ahmed Mohammed
36 Years | Male
MRN: 002312

⚠️ Penicillin Allergy

ثم Tabs مثل:

**Current Visit**

**History**

**Medications**

**Prescriptions**

**Attachments**

وأمام الطبيب مباشرة:

Chief Complaint
Diagnosis
Notes
Prescription

ولا نجعله ينتقل بين عشر شاشات لإنشاء وصفة.

---

# Reception UI

موظف الاستقبال يحتاج أسرع Workflow ممكن:

Search patient

→ Found?

Yes → New Visit

No → Register Patient

→ Select Doctor

→ Add to Queue.

ويجب أن يستطيع البحث بالـ:

* Phone
* Patient ID
* Name
* National ID إذا كان مستخدمًا.

---

# Inventory UI

موظف المخزون لا يحتاج نفس واجهة الصيدلي.

يحتاج مثلًا:

**Stock Overview**

Product
Warehouse
Batch
Expiry
Available
Reserved
Quarantine

وفلاتر قوية:

Branch
Warehouse
Category
Supplier
Batch
Expiry Period.

---

# Owner Dashboard

صاحب الصيدلية لا يحتاج أن يرى كل العمليات.

يحتاج مثلًا:

**Today's Sales**

**Gross Profit**

**Returns**

**Cash Difference**

**Low Stock**

**Near Expiry**

**Outstanding Suppliers**

**Clinic Visits**

**Prescriptions Waiting**

ثم يستطيع الدخول للتفاصيل.

---

# Accounting UI

واجهة المحاسب يجب أن تكون مختلفة أيضًا:

Sales Summary
Purchases
Payments
Refunds
Cash Sessions
Journal Entries
Supplier Balances
Customer Balances
Tax Reports.

---

## والبرومبت يجب أن يمنع الذكاء الاصطناعي من هذا الخطأ

ممنوع:

> إنشاء كل شاشات النظام دفعة واحدة.

بدلًا من ذلك:

### UI Slice 001

Login

### UI Slice 002

Patient Search

### UI Slice 003

Patient Registration

### UI Slice 004

Doctor Queue

### UI Slice 005

Doctor Patient View

### UI Slice 006

Prescription Creation

### UI Slice 007

Pharmacy Prescription Queue

### UI Slice 008

POS Sale

ثم كل Slice تمر بـ:

Wireframe
→ Review
→ User Scenario
→ Prototype
→ Approval
→ Development.

---

# Design Review Team

كذلك نضيف فريقًا يراجع كل شاشة:

**UX Designer**

هل الشاشة سهلة؟

**Pharmacist**

هل تناسب عملي الحقيقي؟

**Business Analyst**

هل تطبق الـBusiness Rules؟

**Security Engineer**

هل تظهر بيانات لا يجب أن يراها المستخدم؟

**Accessibility Specialist**

هل القراءة والألوان والأزرار مناسبة؟

**Developer**

هل التصميم قابل للتنفيذ بطريقة صحيحة؟

**QA**

هل حالات الخطأ والLoading والEmpty State واضحة؟

ثم يحصل التصميم على:

**UI APPROVED**

قبل البرمجة.

---

# ولا ننسى حالات الشاشة

هذه نقطة يغفل عنها كثير من المصممين.

لكل شاشة يجب تصميم:

Normal State

Loading State

Empty State

Error State

Offline State

No Permission State

Partial Data State

Success State

Warning State.

مثلاً شاشة Prescription Queue ليست مجرد شكل عندما توجد وصفات.

يجب تصميم أيضًا:

> لا توجد وصفات حاليًا.

و:

> فقد الاتصال بالخادم.

و:

> حدثت مشكلة أثناء تحميل الوصفات.

---

# Design System

ثم ننشئ Design System خاص بنا، وليس Template جاهز.

يحدد:

Typography

Arabic Font

English Font

Color Palette

Spacing

Border Radius

Icons

Tables

Forms

Buttons

Dropdowns

Modals

Drawers

Alerts

Badges

Tabs

Navigation

Search

Pagination

Date Pickers

Toast Messages.

ونحدد الحالات مثل:

Primary
Secondary
Success
Warning
Danger
Disabled
Loading.

---

# الصيدلية والعيادة يمكن أن يكون لهما هوية واحدة

مثلاً Brand رئيسية:

**XXXXX Health**

وتحتها:

**XXXXX Pharmacy**

**XXXXX Clinic**

بنفس الهوية العامة، مع اختلاف بسيط في Accent Color.

وهذا يشمل:

Logo
App Icon
Login
Receipt
Prescription
Invoice
Reports
Employee ID
Signs.

---

## والأفضل أيضًا أن نضيف AI Design Critic

داخل الفريق شخصيات مثل:

**Senior Product Designer**

**Healthcare UX Expert**

**Pharmacy UX Expert**

**Arabic RTL Designer**

**Design System Architect**

**UX Researcher**

**Accessibility Expert**

**UI QA Specialist**

ودورهم ليس فقط التصميم، بل **انتقاد التصميم**.

قبل قبول أي شاشة يسألون:

> هل هناك خطوة يمكن حذفها؟

> هل يمكن تنفيذ المهمة أسرع؟

> هل الصيدلي يستطيع تشغيلها بالKeyboard؟

> ماذا يحدث إذا أخطأ المستخدم؟

> ماذا يحدث إذا كان هناك 10,000 دواء؟

> ماذا لو كان اسم الدواء عربيًا؟

> ماذا لو كان Barcode غير معروف؟

> ماذا لو انتهى Batch؟

> ماذا لو الشبكة انقطعت؟

وهذه النقطة مهمة جدًا.

**أنا سأضيف للـMaster Prompt مرحلة كاملة اسمها `PRODUCT DESIGN & UX ENGINEERING`** بحيث لا يكون تصميم الواجهات مجرد "اعمل UI جميل"، بل عملية هندسية تبدأ من المستخدم وتنتهي بـPrototype مختبر ومعتمد قبل كتابة الـFrontend.

