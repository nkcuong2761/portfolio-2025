# Case Study: Mix Batch Payment
### Streamlining high-volume transfers for Techcombank Business

**Role:** Lead UX Designer (Discovery, Iteration, Prototyping, UXR)
**Timeline:** 3 Months (May – Aug 2024)
**Team:** 1 Product Owner, 4 BAs, 6 Engineers/QAs, 1 UX Writer, 1 UX Researcher.

---

## 1. Project Overview

### The Challenge
Released in 2022, the batch transfer feature on Techcombank Business allows corporate customers to send money to multiple beneficiaries in a single transaction. However, the legacy system forced users to segregate transfers: one batch for internal (Techcombank) receivers and a separate batch for external banks.

### The Goal
In 2024, I spearheaded the design process to launch **Mix Batch Payment**. The goal was to allow users to combine all beneficiary types into a single file, eliminating redundant workflows and adhering to the mental models of modern accountants.

### The Impact (Scale)
This feature serves our highest-value segment:
* **551** SME Customers
* **380** Large Enterprise Customers
* **4,503 Billion VND** in transaction volume

---

## 2. The Problem

### The Pain of Fragmentation
In the previous version, users uploaded an Excel sheet containing transfer details. The catch? All beneficiaries in that sheet had to be from the same group: either all Techcombank (internal) or all external banks.

This created friction in real-world scenarios. For example, a supply chain company **paying for raw materials from multiple manufacturers to support the company's production line** cannot control which banks their vendors use. If 50% of vendors use Techcombank and 50% use other banks, the accountant had to split their data and initiate two separate batch transfers.

This defeated the purpose of batching, which is to **consolidate all transactions within a payment cycle into a single request, simplifying management and cash flow auditing.**

### Heuristic Audit & Designers’ Insights
Before starting the redesign, I audited the 2022 interface and analyzed CSAT feedback. I identified three major usability debts:

1.  **Visibility of System Status:** The upload screen showed an infinite loading loop with no time estimation.
2.  **High Interaction Cost:** To view error messages, users had to click into each individual transaction rather than seeing a summary.
3.  **Lack of Transparency:** Users couldn't see the *transfer method*.
    * *Context:* Transfers to external banks go through either **NAPAS 247** (Instant) or **CITAD** (Interbank - up to 1 business day). Large corporations need to know exactly when money will arrive, but the system didn't display which infrastructure would be used.

---

## 3. Exploration & Solutioning

### Competitor Benchmarking
To understand industry standards, I analyzed how competitors handle batching in Vietnam.

* **Bank MB:** Good error handling (dedicated step to view/edit errors). However, they failed to differentiate between NAPAS/CITAD transfers.
* **VCB:** Allowed direct editing on the web, but the revision page was cluttered, combining error and valid transactions in a single view with poor hierarchy.

### The Design Hypothesis
We had a clear goal: **Allow mixed beneficiaries.** However, we had a debate regarding the **Transaction Revision Page**. How should we group valid transactions to help accountants review them best?

* **Option A (Bank-Based Grouping):** Separate transactions by Internal vs. External.
    * *Assumption:* Users are used to the old workflow and want to see these two categories clearly separated for accounting purposes.
* **Option B (Speed-Based Grouping):** Separate transactions by Interbank (CITAD/Slow) vs. NAPAS (Instant).
    * *Assumption:* Techcombank prioritizes NAPAS. However, NAPAS has strict rules (e.g., <500M VND, <100 char notes). If we highlight transactions that fail these rules (and are forced into CITAD), users might fix them to ensure instant payment.

---

## 4. User Research & Validation

To settle the debate between Option A and Option B, and to validate the need for a "Direct Edit" feature, we conducted In-depth Interviews and Usability Testing with **5 SME Accountants**.

### Key Findings

**1. The "Source of Truth" Insight**
We proposed a feature to let users edit errors directly on the website (like our competitors). Surprisingly, **5/5 users rejected this.**
* *Why?* Accountants need their local Excel file to match the bank records 100%. If they fix an error on the web, their local file is outdated. They preferred to fix the Excel file and re-upload.
* *Design Decision:* We cut the "Direct Edit" feature from the scope, saving engineering time and aligning with actual user behavior.

**2. Speed Over Origin**
**3/5 users preferred Option B** (Grouping by Speed/Infrastructure).
* One user noted that distinguishing between NAPAS and CITAD was critical; she would actively edit transaction amounts or notes to ensure the payment went through NAPAS 247 for instant delivery.

---

## 5. Final Design

Based on the research, I proceeded with **Option B**, focusing on transparency regarding payment speed.

### 1. Entry Point & Upload
* **Expectation Management:** Replaced the infinite loader with a percentage tracker.
* **Async Awareness:** Added visuals indicating where users can find the file later if the upload takes too long (for massive files).

### 2. Transaction Revision (The Core Improvement)
* **Semantic Affordance:** I used visual signaling to separate **NAPAS** (Instant) from **Interbank** (Slow) transactions.
* **Inline Warnings:** If a transaction was forced into the slow Interbank path (e.g., because the note was too long), a warning appeared. This nudged users to fix the note in their Excel file if they wanted instant transfer.
* **Summary Footer:** A persistent footer showing the total money and transaction count, providing immediate feedback against the user's physical paperwork.

### 3. Review & Submit
We maintained a single listing table for the final step. Since this requires Dual Control (Maker/Checker) security, this page acts as the final "clean" list for the accountant to sign off on before sending it to the approver.