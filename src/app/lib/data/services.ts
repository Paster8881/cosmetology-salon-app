import { Service } from "../../types/service";

export const services: Service[] = [
   // FACIALS
  { id: 1, title: "Classic European Facial", price: 120, categoryId: "facials" },
  { id: 2, title: "Deep Cleansing Facial", price: 140, categoryId: "facials" },
  { id: 3, title: "Hydrating Facial", price: 130, categoryId: "facials" },
  { id: 4, title: "Express Facial (30 min)", price: 80, categoryId: "facials" },
  { id: 5, title: "Luxury Spa Facial", price: 180, categoryId: "facials" },
  { id: 6, title: "Oxygen Facial", price: 160, categoryId: "facials" },
  { id: 7, title: "Brightening Facial", price: 150, categoryId: "facials" },
  { id: 8, title: "Sensitive Skin Facial", price: 135, categoryId: "facials" },

  // ACNE
  { id: 9, title: "Acne Clearing Facial", price: 150, categoryId: "acne_treatment" },
  { id: 10, title: "Teen Acne Treatment", price: 110, categoryId: "acne_treatment" },
  { id: 11, title: "Back Acne Treatment", price: 160, categoryId: "acne_treatment" },
  { id: 12, title: "Acne Extraction Session", price: 90, categoryId: "acne_treatment" },
  { id: 13, title: "LED Light Therapy for Acne", price: 120, categoryId: "acne_treatment" },
  { id: 14, title: "Acne Peel Treatment", price: 170, categoryId: "acne_treatment" },
  { id: 15, title: "Oil Control Facial", price: 130, categoryId: "acne_treatment" },
  { id: 16, title: "Acne Maintenance Facial", price: 140, categoryId: "acne_treatment" },

  // ANTI AGING
  { id: 17, title: "Anti-Aging Facial", price: 170, categoryId: "anti_aging" },
  { id: 18, title: "Collagen Boost Treatment", price: 190, categoryId: "anti_aging" },
  { id: 19, title: "Microcurrent Facial", price: 180, categoryId: "anti_aging" },
  { id: 20, title: "Firming Facial", price: 165, categoryId: "anti_aging" },
  { id: 21, title: "Vitamin C Facial", price: 150, categoryId: "anti_aging" },
  { id: 22, title: "LED Anti-Aging Therapy", price: 140, categoryId: "anti_aging" },
  { id: 23, title: "Neck & Décolleté Treatment", price: 130, categoryId: "anti_aging" },
  { id: 24, title: "Wrinkle Reduction Facial", price: 175, categoryId: "anti_aging" },

  // WAXING
  { id: 25, title: "Eyebrow Wax", price: 25, categoryId: "waxing" },
  { id: 26, title: "Upper Lip Wax", price: 20, categoryId: "waxing" },
  { id: 27, title: "Full Face Wax", price: 60, categoryId: "waxing" },
  { id: 28, title: "Bikini Wax", price: 50, categoryId: "waxing" },
  { id: 29, title: "Brazilian Wax", price: 75, categoryId: "waxing" },
  { id: 30, title: "Underarm Wax", price: 30, categoryId: "waxing" },
  { id: 31, title: "Full Leg Wax", price: 90, categoryId: "waxing" },
  { id: 32, title: "Half Leg Wax", price: 60, categoryId: "waxing" },

  // BROWS & LASHES
  { id: 33, title: "Eyebrow Shaping", price: 30, categoryId: "brows_lashes" },
  { id: 34, title: "Eyebrow Tint", price: 25, categoryId: "brows_lashes" },
  { id: 35, title: "Lash Lift", price: 90, categoryId: "brows_lashes" },
  { id: 36, title: "Lash Lift & Tint", price: 110, categoryId: "brows_lashes" },
  { id: 37, title: "Classic Lash Extensions", price: 140, categoryId: "brows_lashes" },
  { id: 38, title: "Volume Lash Extensions", price: 180, categoryId: "brows_lashes" },
  { id: 39, title: "Lash Fill", price: 80, categoryId: "brows_lashes" },
  { id: 40, title: "Brow Lamination", price: 85, categoryId: "brows_lashes" },

  // BODY
  { id: 41, title: "Body Scrub Treatment", price: 120, categoryId: "body_treatments" },
  { id: 42, title: "Back Facial", price: 140, categoryId: "body_treatments" },
  { id: 43, title: "Detox Body Wrap", price: 160, categoryId: "body_treatments" },
  { id: 44, title: "Slimming Body Treatment", price: 180, categoryId: "body_treatments" },
  { id: 45, title: "Hydrating Body Wrap", price: 150, categoryId: "body_treatments" },
  { id: 46, title: "Cellulite Reduction Treatment", price: 170, categoryId: "body_treatments" },
  { id: 47, title: "Seaweed Body Wrap", price: 165, categoryId: "body_treatments" },
  { id: 48, title: "Full Body Polish", price: 130, categoryId: "body_treatments" },

  // PEELS
  { id: 49, title: "Light Chemical Peel", price: 120, categoryId: "peels" },
  { id: 50, title: "Glycolic Peel", price: 140, categoryId: "peels" },
  { id: 51, title: "Salicylic Acid Peel", price: 150, categoryId: "peels" },
  { id: 52, title: "Lactic Acid Peel", price: 130, categoryId: "peels" },
  { id: 53, title: "Anti-Aging Peel", price: 160, categoryId: "peels" },
  { id: 54, title: "Brightening Peel", price: 145, categoryId: "peels" },
  { id: 55, title: "Acne Peel", price: 150, categoryId: "peels" },
  { id: 56, title: "Deep Peel Treatment", price: 200, categoryId: "peels" },

  // MASSAGE
  { id: 57, title: "Swedish Massage", price: 120, categoryId: "massage" },
  { id: 58, title: "Deep Tissue Massage", price: 140, categoryId: "massage" },
  { id: 59, title: "Hot Stone Massage", price: 160, categoryId: "massage" },
  { id: 60, title: "Aromatherapy Massage", price: 150, categoryId: "massage" },
  { id: 61, title: "Prenatal Massage", price: 130, categoryId: "massage" },
  { id: 62, title: "Couples Massage", price: 220, categoryId: "massage" },
  { id: 63, title: "Express Massage (30 min)", price: 80, categoryId: "massage" },
  { id: 64, title: "Full Body Massage", price: 170, categoryId: "massage" },
]