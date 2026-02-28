import Prose from "components/prose";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | MUSCALAR PRO",
  description: "Shipping Policy for MUSCALAR PRO Health Private Limited.",
};

export default function ShippingPolicyPage() {
  const content = `
    <h1>Muscalar Pro Health Private Limited Shipping & Delivery Policy</h1>
    <p>Last Updated and Effective: 28.02.2026</p>

    <p>Muscalar Pro Health Private Limited ("MUSCALAR PRO," "we," "our," or "us") is committed to delivering your MUSCALAR PRO M3 orders promptly, securely, and in optimal condition. This Shipping & Delivery Policy ("Policy") outlines everything you need to know about how your order travels from our facility to your doorstep. By placing an order on muscularpro.com or any affiliated platform, you agree to the terms described herein.</p>
    <p>This Policy should be read in conjunction with our Terms of Service and Privacy Policy, available at muscularpro.com.</p>

    <h2>1. Shipping Overview</h2>
    <p>We ship MUSCALAR PRO M3 products across India and to select international destinations. Our fulfillment infrastructure is designed to ensure your science-backed MuscleSpan supplement arrives in clinically sealed, tamper-evident, temperature-appropriate packaging—preserving the integrity of every capsule from our GMP-certified manufacturing facility to your hands.</p>

    <h2>2. Where We Ship</h2>
    <h3>2.1 Domestic Shipping (India)</h3>
    <p>We deliver to all serviceable pin codes across India, covering all 28 states and 8 Union Territories. Delivery is facilitated through our logistics partners including leading courier services and aggregators with pan-India reach.</p>
    <p>Serviceable Pin Codes: Enter your pin code at checkout to verify serviceability for your location. In rare cases, remote or restricted areas may require additional transit time or may not be serviceable by standard carriers.</p>
    
    <h3>2.2 Quick Commerce Availability</h3>
    <p>MUSCALAR PRO M3 is progressively available on select quick-commerce platforms (e.g., Blinkit, Zepto, Swiggy Instamart) in major metro cities. Quick-commerce orders are fulfilled directly through the respective platform's dark-store network and are subject to that platform's delivery terms, timelines, and service areas. For quick-commerce orders, please refer to the respective platform's shipping and delivery policies.</p>
    
    <h3>2.3 International Shipping</h3>
    <p>International shipping is currently available to select countries. International availability, shipping costs, transit times, and applicable customs duties vary by destination. All international shipping fees and estimated landed costs (including duties, taxes, and import fees) will be calculated and displayed at checkout before you complete your order.</p>
    <p>Customers are responsible for compliance with all customs regulations, import restrictions, and applicable duties/taxes in their destination country. MUSCALAR PRO is not liable for delays, confiscations, or additional charges imposed by customs authorities.</p>

    <h2>3. Shipping Methods & Estimated Timelines</h2>
    <h3>3.1 Domestic Shipping (India)</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full text-left border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-3 font-semibold">Shipping Method</th>
            <th className="border border-gray-200 p-3 font-semibold">Estimated Delivery</th>
            <th className="border border-gray-200 p-3 font-semibold">Cost</th>
            <th className="border border-gray-200 p-3 font-semibold">Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 p-3">Standard Shipping</td>
            <td className="border border-gray-200 p-3">5–7 business days</td>
            <td className="border border-gray-200 p-3">FREE on all prepaid orders</td>
            <td className="border border-gray-200 p-3">All India (serviceable pin codes)</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-3">Express Shipping</td>
            <td className="border border-gray-200 p-3">2–3 business days</td>
            <td className="border border-gray-200 p-3">Calculated at checkout</td>
            <td className="border border-gray-200 p-3">Metro & Tier-1 cities</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-3">Quick Commerce</td>
            <td className="border border-gray-200 p-3">10–30 minutes</td>
            <td className="border border-gray-200 p-3">Per platform terms</td>
            <td className="border border-gray-200 p-3">Select metros (Blinkit, Zepto, Instamart)</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-3">Cash on Delivery (COD)</td>
            <td className="border border-gray-200 p-3">5–7 business days</td>
            <td className="border border-gray-200 p-3">Nominal COD fee may apply</td>
            <td className="border border-gray-200 p-3">Subject to eligibility & pin code</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Business days are Monday through Saturday, excluding national and regional public holidays. Delivery estimates begin from the date of dispatch, not the date of order placement.</p>
    
    <h3>3.2 International Shipping</h3>
    <div className="overflow-x-auto my-6">
      <table className="min-w-full text-left border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-3 font-semibold">Destination</th>
            <th className="border border-gray-200 p-3 font-semibold">Estimated Delivery</th>
            <th className="border border-gray-200 p-3 font-semibold">Shipping Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 p-3">United States, Canada, UK</td>
            <td className="border border-gray-200 p-3">7–14 business days</td>
            <td className="border border-gray-200 p-3">Calculated at checkout (weight & destination based)</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-3">Europe (EEA), Australia</td>
            <td className="border border-gray-200 p-3">10–18 business days</td>
            <td className="border border-gray-200 p-3">Calculated at checkout (weight & destination based)</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-3">Southeast Asia, Middle East</td>
            <td className="border border-gray-200 p-3">7–12 business days</td>
            <td className="border border-gray-200 p-3">Calculated at checkout (weight & destination based)</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-3">Rest of World</td>
            <td className="border border-gray-200 p-3">14–21 business days</td>
            <td className="border border-gray-200 p-3">Calculated at checkout (weight & destination based)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>International transit times are estimates and may vary due to customs clearance, local postal service delays, or force majeure events. We are not responsible for delays caused by customs processing in the destination country.</p>

    <h2>4. Order Processing</h2>
    <h3>4.1 Processing Time</h3>
    <p>All orders placed before 2:00 PM IST on a business day are processed and dispatched within 24–48 hours. Orders placed after 2:00 PM IST, or on weekends and public holidays, will be processed on the next business day.</p>
    
    <h3>4.2 Order Confirmation</h3>
    <p>Upon placing your order, you will receive an order confirmation via email and/or SMS to the contact details associated with your account. This confirmation acknowledges receipt of your order but does not constitute acceptance. Order acceptance occurs when your order is dispatched and a shipping confirmation is sent.</p>
    
    <h3>4.3 Processing Stages</h3>
    <ol>
      <li>Order Received — Payment verified, order logged in our system.</li>
      <li>Quality Check — Product integrity verified; batch number and expiry confirmed.</li>
      <li>Packaging — Tamper-evident, temperature-appropriate packaging applied.</li>
      <li>Dispatch — Handed over to logistics partner; tracking ID generated.</li>
      <li>In Transit — Real-time tracking available via email/SMS link.</li>
    </ol>

    <h2>5. Shipping Costs & Free Shipping</h2>
    <h3>5.1 Free Shipping (Domestic)</h3>
    <p>MUSCALAR PRO offers complimentary standard shipping on all prepaid domestic orders across India. There is no minimum order value required to qualify for free shipping.</p>
    
    <h3>5.2 Express Shipping</h3>
    <p>Express shipping is available in select metro and Tier-1 cities at an additional cost, calculated dynamically at checkout based on weight, dimensions, and destination. Express shipping charges will be clearly displayed before you complete your purchase.</p>
    
    <h3>5.3 COD Charges</h3>
    <p>A nominal Cash on Delivery handling fee may apply to COD orders to offset additional logistical and reconciliation costs. The exact COD fee, if any, will be displayed at checkout. COD availability is subject to pin code eligibility and order value limits.</p>
    
    <h3>5.4 International Shipping Costs</h3>
    <p>International shipping costs are calculated based on package weight, dimensions, and the destination country. Costs include carrier charges and may include a landed-cost estimate covering duties and taxes, so you are not surprised at delivery. All international shipping fees are clearly displayed at checkout before order confirmation.</p>

    <h2>6. Order Tracking</h2>
    <p>Once your order is dispatched, you will receive a Shipping Confirmation email and/or SMS containing:</p>
    <ul>
      <li>Your unique Tracking ID / AWB (Air Waybill) number</li>
      <li>The name of the assigned logistics carrier</li>
      <li>A direct link to track your shipment in real time</li>
    </ul>

    <p>You can also track your order at any time by:</p>
    <ul>
      <li>Logging into your account at muscularpro.com and navigating to "Order History"</li>
      <li>Contacting our support team at <a href="mailto:support@muscularpro.com">support@muscularpro.com</a> with your order number</li>
      <li>Replying to any order-related SMS with your order ID</li>
    </ul>

    <p>Tracking information may take up to 24 hours to update after dispatch. International shipments may experience tracking gaps during customs clearance.</p>

    <h2>7. Subscription Orders</h2>
    <p>If you subscribe to MUSCALAR PRO M3 for monthly delivery (subscription plans), the following terms apply:</p>
    <ul>
      <li>Subscription orders are automatically processed and shipped based on your selected delivery cycle (e.g., every 30, 60, or 90 days).</li>
      <li>You will receive an email/SMS reminder 3 days before your next subscription shipment is processed.</li>
      <li>You may modify your delivery address, skip a shipment, change your delivery cycle, or cancel your subscription at any time before the processing date by logging into your account or contacting <a href="mailto:support@muscularpro.com">support@muscularpro.com</a>.</li>
      <li>Subscription orders ship with the same free standard shipping benefit as one-time prepaid orders.</li>
      <li>If payment fails for a subscription renewal, we will notify you and attempt to process payment up to 2 additional times before pausing your subscription.</li>
    </ul>

    <h2>8. Packaging & Product Integrity</h2>
    <p>MUSCALAR PRO M3 is a precision nutraceutical containing clinically dosed Urolithin A (1000 mg), Spermidine (6 mg), and S-Allyl Cysteine (1 mg) per serving. Product integrity during transit is our priority.</p>
    
    <h3>8.1 Packaging Standards</h3>
    <ul>
      <li>All products are shipped in sealed, tamper-evident containers inside protective secondary packaging.</li>
      <li>Cushioning materials are used to prevent movement, breakage, or damage during transit.</li>
      <li>Each shipment includes the product batch number, manufacturing date, and expiry date on the label.</li>
      <li>Products are stored and shipped at temperatures not exceeding 25°C, in accordance with label storage requirements.</li>
    </ul>
    
    <h3>8.2 Product Safety Notice</h3>
    <p>Upon receiving your order, please inspect the packaging for any signs of damage or tampering. If the seal is broken, the packaging is visibly damaged, or you suspect the product may have been compromised during transit, do not consume the product. Contact us immediately at <a href="mailto:support@muscularpro.com">support@muscularpro.com</a> with your order number and photographs of the damage.</p>

    <h2>9. Shipping Address & Modifications</h2>
    <h3>9.1 Accurate Address Information</h3>
    <p>You are responsible for providing accurate and complete shipping details at the time of order placement, including: full name, complete street address with house/flat/building number, city, state, PIN code, landmarks (if applicable), and active mobile number.</p>
    <p>MUSCALAR PRO shall not be liable for non-delivery, misdelivery, or delays caused by incorrect or incomplete address information provided by the customer.</p>
    
    <h3>9.2 Address Changes</h3>
    <p>Before Dispatch: You may modify your shipping address by contacting <a href="mailto:support@muscularpro.com">support@muscularpro.com</a> or calling our Customer Care team before the order is dispatched.</p>
    <p>After Dispatch: Once the order has been handed over to the logistics partner, address changes cannot be guaranteed. We will make best efforts to accommodate requests, but changes are subject to carrier policies and may not always be possible.</p>

    <h2>10. Delivery Attempts & Failed Deliveries</h2>
    <p>Our logistics partners will make up to 3 delivery attempts at the shipping address provided. If delivery is unsuccessful after all attempts:</p>
    <ul>
      <li>The shipment will be marked as "Returned to Origin" (RTO) and sent back to our warehouse.</li>
      <li>For prepaid orders, a refund will be initiated to the original payment method within 7–10 business days of the product being received back at our facility, minus any applicable shipping charges for express orders.</li>
      <li>For COD orders that could not be delivered, the order will be automatically cancelled with no charge to the customer.</li>
      <li>You may also request a re-shipment by contacting <a href="mailto:support@muscularpro.com">support@muscularpro.com</a>. Re-shipment may be subject to additional shipping charges.</li>
    </ul>
    <p>To avoid failed deliveries, please ensure someone is available at the delivery address to receive the package during standard delivery hours (9:00 AM – 7:00 PM IST, Monday through Saturday). If you are unavailable, the courier partner will contact you via SMS or phone call to arrange re-delivery.</p>

    <h2>11. Cash on Delivery (COD) Policy</h2>
    <p>Cash on Delivery is available for select domestic orders, subject to the following conditions:</p>
    <ul>
      <li>COD is available for orders within the eligible pin code range and below the maximum COD order value threshold (displayed at checkout).</li>
      <li>A nominal COD handling fee may be added to the order total.</li>
      <li>COD is available for one-time purchases only; subscription orders require prepaid payment.</li>
      <li>Please keep the exact amount ready at the time of delivery to facilitate a smooth handover.</li>
      <li>COD orders are subject to verification. We reserve the right to convert any COD order to prepaid or cancel it if verification fails.</li>
      <li>Coupons, discounts, and promotional cashback offers are valid only on prepaid orders unless explicitly stated otherwise.</li>
    </ul>

    <h2>12. Payment Methods</h2>
    <p>For prepaid orders, we accept the following payment methods:</p>
    <ul>
      <li>Credit Cards (Visa, Mastercard, American Express, RuPay)</li>
      <li>Debit Cards</li>
      <li>UPI (Google Pay, PhonePe, Paytm, BHIM UPI)</li>
      <li>Net Banking (all major Indian banks)</li>
      <li>Wallets (Paytm, Amazon Pay, where available)</li>
      <li>EMI (select banks and credit cards, subject to minimum order value)</li>
      <li>International credit/debit cards (for international orders)</li>
    </ul>
    <p>All payments are processed through PCI-DSS compliant payment gateways. MUSCALAR PRO does not store your card details on our servers. If payment is debited from your account but not reflected in your order status, please contact <a href="mailto:support@muscularpro.com">support@muscularpro.com</a> with a screenshot of the transaction.</p>

    <h2>13. Taxes & Regulatory Compliance</h2>
    <p>All product MRPs listed on muscularpro.com include applicable GST and taxes as per Government of India regulations. No additional tax is charged at checkout for domestic orders beyond what is displayed.</p>
    <p>For international orders, the customer is solely responsible for any customs duties, import taxes, VAT, or other government-imposed fees levied by the destination country. These charges are not included in the product price or shipping fees unless explicitly stated as part of a landed-cost calculation at checkout.</p>
    <p>MUSCALAR PRO M3 is manufactured in FSSAI-licensed, GMP-certified facilities and complies with all applicable FSSAI regulations for dietary supplements sold in India.</p>

    <h2>14. Shipping Delays & Force Majeure</h2>
    <p>While we make every effort to deliver your orders within the estimated timelines, delays may occur due to:</p>
    <ul>
      <li>High order volume during promotional events, sales, or new product launches</li>
      <li>Carrier-side operational delays, route disruptions, or vehicle breakdowns</li>
      <li>Natural disasters, floods, extreme weather conditions, or geological events</li>
      <li>Pandemics, epidemics, or government-mandated lockdowns or restrictions</li>
      <li>Customs clearance delays (international orders)</li>
      <li>Strikes, civil unrest, or political disruptions affecting logistics networks</li>
      <li>Incorrect or incomplete shipping address provided by the customer</li>
    </ul>
    <p>In the event of significant shipping delays, we will proactively notify you via email/SMS with updated delivery estimates. MUSCALAR PRO shall not be held liable for any direct, indirect, or consequential losses arising from shipping delays caused by events beyond our reasonable control (force majeure).</p>

    <h2>15. Damaged, Missing, or Incorrect Shipments</h2>
    <h3>15.1 Damaged Products</h3>
    <p>If your product arrives damaged, with a broken seal, or in a condition that appears compromised:</p>
    <ol>
      <li>Do not consume the product.</li>
      <li>Photograph the outer packaging, inner packaging, and product from multiple angles.</li>
      <li>Email <a href="mailto:support@muscularpro.com">support@muscularpro.com</a> within 48 hours of delivery with your order number, photographs, and a description of the damage.</li>
      <li>We will arrange a replacement or full refund at no additional cost to you.</li>
    </ol>
    
    <h3>15.2 Missing Items</h3>
    <p>If any item is missing from your order, contact us at <a href="mailto:support@muscularpro.com">support@muscularpro.com</a> within 48 hours of delivery with your order number. We will verify the shipment against our dispatch records and resolve the issue promptly—either by shipping the missing item or processing a refund.</p>
    
    <h3>15.3 Incorrect Products</h3>
    <p>If you receive a product different from what you ordered, contact us within 48 hours at <a href="mailto:support@muscularpro.com">support@muscularpro.com</a>. We will arrange for the incorrect product to be picked up and the correct product to be shipped to you at no additional cost.</p>

    <h2>16. Returns & Refund Eligibility (Shipping-Related)</h2>
    <p>Returns and refunds related to shipping are governed by the following:</p>
    <ul>
      <li>Products damaged in transit: Eligible for full replacement or refund (see Section 15.1).</li>
      <li>Non-delivery / RTO: Prepaid orders refunded within 7–10 business days of warehouse receipt; COD orders cancelled with no charge.</li>
      <li>Incorrect product shipped: Eligible for free exchange (see Section 15.3).</li>
      <li>Change of mind after dispatch: Please refer to our separate Return & Refund Policy at muscularpro.com/refund-policy for eligibility and process.</li>
    </ul>
    <p>For detailed return and refund terms beyond shipping-related issues, please review our Return & Refund Policy available on our website.</p>

    <h2>17. Prohibited & Restricted Zones</h2>
    <p>Certain remote or restricted areas within India and internationally may not be serviceable by our logistics partners. These include, but are not limited to:</p>
    <ul>
      <li>Military cantonments and restricted defense zones</li>
      <li>Select remote areas in Jammu & Kashmir, Northeast India, Andaman & Nicobar Islands, and Lakshadweep where courier serviceability is limited</li>
      <li>Countries where import of dietary supplements is restricted or prohibited by local regulations</li>
    </ul>
    <p>If your pin code or destination is not serviceable, you will be notified at checkout. We recommend contacting <a href="mailto:support@muscularpro.com">support@muscularpro.com</a> before placing an order if you are unsure about serviceability in your area.</p>

    <h2>18. Changes to This Policy</h2>
    <p>MUSCALAR PRO reserves the right to update, amend, or modify this Shipping & Delivery Policy at any time. Any material changes will be communicated via our Website and/or email to registered customers. The updated Policy will be effective immediately upon posting at muscularpro.com. Your continued use of our Services after any changes constitutes your acceptance of the revised Policy.</p>

    <h2>19. Contact Us</h2>
    <p>For any questions, concerns, or issues related to shipping and delivery, please reach out to our Customer Care team:</p>
    <p>
      Email: <a href="mailto:support@muscularpro.com">support@muscularpro.com</a><br>
      Subject Line: "Shipping Inquiry — [Your Order Number]"<br>
      Website: muscularpro.com
    </p>

    <p>Our Customer Care team is available Monday through Saturday, 9:00 AM – 6:00 PM IST (excluding public holidays). We aim to respond to all shipping-related queries within 24 hours.</p>

    <br />
    <p>
      Muscalar Pro Health Private Limited<br>
      CIN: [To Be Updated]<br>
      Registered Office: [To Be Updated]<br>
      FSSAI License No.: [To Be Updated]<br>
      GSTIN: [To Be Updated]
    </p>

    <p>&copy; 2026 Muscalar Pro Health Private Limited. All Rights Reserved.</p>
  `;

  return (
    <>
      <section className="w-full">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-12 md:py-24">
          <div className="mx-auto max-w-4xl">
            <Prose className="mb-12" html={content} />
          </div>
        </div>
      </section>
    </>
  );
}
