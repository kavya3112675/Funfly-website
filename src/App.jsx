
import React, { useState } from "react";

import {
  Home,
  MapPin,
  Images,
  Info,
  Phone,
  Send,
  MessageCircle,
  Clock,
  Users,
  UserRound,
  CalendarDays,
  X,
  Star,
  CheckCircle,
  Mail,
} from "lucide-react";

import "./App.css";
import "./Funfly-style.css";

// =====================================
// SAMPLE PACKAGE PRICES - PER PERSON
// =====================================

const samplePackagePrices = {
  "Cochin – Munnar": 6999,
  "Cochin – Vagamon": 6499,
  "Cochin – Marayoor": 5999,
  "Cochin – Wonderla": 7499,
  "Cochin – Alappuzha": 7999,
  "Cochin – Varkala": 6999,
  "Cochin – Wayanad": 7499,
  "Marayoor – Munnar": 6299,
  "Varkala – Munnar": 7299,
  "Varkala – Vagamon": 6799,
  "Bangalore – Mysore": 5999,
  "Bangalore – Coorg": 7499,
  "Bangalore – Chikmagalore": 6999,
  "Mysore – Coorg": 6499,
  "Mysore – Chikmagalore": 6799,
  "Coorg – Chikmagalore": 7999,
  Ooty: 5999,
  Kodaikanal: 6499,
  Rameswaram: 4999,
  Madurai: 4499,
  Mahabalipuram: 5499,
  Kanyakumari: 5799,
};

// =====================================
// TOUR PACKAGE DATA - 22 PACKAGES
// =====================================

const packages = [
  // KERALA - 10
  {
    name: "Cochin – Munnar",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
  },
  {
    name: "Cochin – Vagamon",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Scenic",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800",
  },
  {
    name: "Cochin – Marayoor",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Nature",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
  },
  {
    name: "Cochin – Wonderla",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Adventure",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
  },
  {
    name: "Cochin – Alappuzha",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Backwaters",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800",
  },
  {
    name: "Cochin – Varkala",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
  {
    name: "Cochin – Wayanad",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Wildlife",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
  },
  {
    name: "Marayoor – Munnar",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Heritage",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    name: "Varkala – Munnar",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Explore",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
  },
  {
    name: "Varkala – Vagamon",
    category: "Kerala",
    days: "2D | 1N",
    tag: "Relax",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },

  // KARNATAKA - 6
  {
    name: "Bangalore – Mysore",
    category: "Karnataka",
    days: "2D | 1N",
    tag: "Royal",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=800",
  },
  {
    name: "Bangalore – Coorg",
    category: "Karnataka",
    days: "2D | 1N",
    tag: "Coffee Trail",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
  },
  {
    name: "Bangalore – Chikmagalore",
    category: "Karnataka",
    days: "2D | 1N",
    tag: "Hills",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
  },
  {
    name: "Mysore – Coorg",
    category: "Karnataka",
    days: "2D | 1N",
    tag: "Heritage",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    name: "Mysore – Chikmagalore",
    category: "Karnataka",
    days: "2D | 1N",
    tag: "Nature",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
  },
  {
    name: "Coorg – Chikmagalore",
    category: "Karnataka",
    days: "2D | 1N",
    tag: "Combo",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
  },

  // TAMIL NADU - 6
  {
    name: "Ooty",
    category: "Tamil Nadu",
    days: "2D | 1N",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    name: "Kodaikanal",
    category: "Tamil Nadu",
    days: "2D | 1N",
    tag: "Scenic",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
  },
  {
    name: "Rameswaram",
    category: "Tamil Nadu",
    days: "2D | 1N",
    tag: "Spiritual",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=800",
  },
  {
    name: "Madurai",
    category: "Tamil Nadu",
    days: "2D | 1N",
    tag: "Heritage",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
  },
  {
    name: "Mahabalipuram",
    category: "Tamil Nadu",
    days: "2D | 1N",
    tag: "Historical",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
  },
  {
    name: "Kanyakumari",
    category: "Tamil Nadu",
    days: "2D | 1N",
    tag: "Ocean Trip",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
];

// =====================================
// GALLERY PHOTOS
// =====================================

const galleryPhotos = [
  "photo-1500530855697-b586d89ba3ee",
  "photo-1470770841072-f978cf4d019e",
  "photo-1501785888041-af3ef285b470",
  "photo-1511497584788-876760111969",
  "photo-1448375240586-882707db888b",
  "photo-1472396961693-142e6e269027",
];

// =====================================
// MAIN APP
// =====================================

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showQuotation, setShowQuotation] = useState(false);
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    date: "",
    persons: 2,
    message: "",
  });

  const [quotationData, setQuotationData] = useState({
    name: "",
    mobile: "",
    date: "",
    persons: 2,
  });

  // =====================================
  // PACKAGE FILTER
  // =====================================

  const filteredPackages =
    activeCategory === "All"
      ? packages
      : packages.filter(
          (item) => item.category === activeCategory
        );

  const visiblePackages = showAll
    ? filteredPackages
    : filteredPackages.slice(0, 8);

  // =====================================
  // PACKAGE ENQUIRE - OLD POPUP
  // =====================================

  const openEnquiry = (item = null) => {
    setSelectedPackage(item);
    setShowEnquiry(true);
    setShowQuotation(false);
  };

  // =====================================
  // TOP NAVBAR ENQUIRE - QUOTATION PAGE
  // =====================================

  const openQuotation = () => {
    setSelectedPackage(null);

    setQuotationData({
      name: "",
      mobile: "",
      date: "",
      persons: 2,
    });

    setShowEnquiry(false);
    setShowQuotation(true);
    setMenuOpen(false);

    window.scrollTo(0, 0);
  };

  // =====================================
  // QUOTATION PACKAGE SELECTION
  // =====================================

  const handleQuotationPackageChange = (e) => {
    const selectedName = e.target.value;

    const selected = packages.find(
      (item) => item.name === selectedName
    );

    setSelectedPackage(selected || null);
  };

  // =====================================
  // CLOSE GENERAL ENQUIRY
  // =====================================

  const closeEnquiry = () => {
    setShowEnquiry(false);
  };

  // =====================================
  // CLOSE QUOTATION PAGE
  // =====================================

  const closeQuotation = () => {
    setShowQuotation(false);
    setSelectedPackage(null);
    window.scrollTo(0, 0);
  };

  // =====================================
  // GENERAL ENQUIRY INPUT CHANGE
  // =====================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================
  // GENERAL ENQUIRY WHATSAPP SUBMIT
  // =====================================

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    const message = `
FUNFLY HOLIDAYS - NEW ENQUIRY

Package: ${selectedPackage?.name || "General Enquiry"}

Name: ${formData.name}

Mobile: ${formData.mobile}

Email: ${formData.email || "Not provided"}

Travel Date: ${formData.date || "Not specified"}

Persons: ${formData.persons}

Special Requirements:
${formData.message || "Not specified"}

Thank you!
    `;

    const whatsappURL =
      `https://wa.me/917810065579?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    setShowEnquiry(false);
  };

  // =====================================
  // DIRECT WHATSAPP
  // =====================================

  const openWhatsApp = () => {
    const message = selectedPackage
      ? `Hi FunFly Holidays! I am interested in ${selectedPackage.name}. Please share the quotation.`
      : "Hi FunFly Holidays! I am interested in your tour packages. Please contact me.";

    window.open(
      `https://wa.me/917810065579?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // =====================================
  // QUOTATION INPUT CHANGE
  // =====================================

  const updateQuotation = (e) => {
    const { name, value } = e.target;

    setQuotationData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================
  // QUOTATION PRICE CALCULATION
  // =====================================

  const packagePrice = selectedPackage
    ? samplePackagePrices[selectedPackage.name] || 5999
    : 0;

  const quotationPersons = Math.max(
    1,
    Math.min(100, Number(quotationData.persons) || 1)
  );

  const totalAmount = packagePrice * quotationPersons;

  // =====================================
  // SHARE QUOTATION THROUGH WHATSAPP
  // =====================================

  const shareQuotation = () => {
    if (!selectedPackage) {
      alert("Please select a tour package.");
      return;
    }

    if (
      !quotationData.name.trim() ||
      !quotationData.mobile.trim() ||
      !quotationData.date
    ) {
      alert("Please fill in all customer details.");
      return;
    }

    const message = `
FUNFLY HOLIDAYS - QUOTATION

Package: ${selectedPackage.name}
Category: ${selectedPackage.category}
Duration: ${selectedPackage.days}

Customer Name: ${quotationData.name}
Mobile: ${quotationData.mobile}
Travel Date: ${quotationData.date}
Persons: ${quotationPersons}

Price Per Person: ₹${packagePrice.toLocaleString("en-IN")}

Total Amount: ₹${totalAmount.toLocaleString("en-IN")}

Thank you for choosing FunFly Holidays!
Your journey, our responsibility.
    `;

    window.open(
      `https://wa.me/917810065579?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // =====================================
  // PHOTO GALLERY PAGE
  // =====================================

  if (showPhotoGallery) {
    return (
      <div className="full-gallery-page">
        <div className="full-gallery-header">
          <div>
            <span className="section-label">
              FUNFLY HOLIDAYS
            </span>

            <h1>Our Travel Photo Gallery</h1>

            <p>
              Explore beautiful moments and unforgettable destinations.
            </p>
          </div>

          <button
            className="back-website-btn"
            onClick={() => {
              setShowPhotoGallery(false);
              window.scrollTo(0, 0);
            }}
          >
            ← BACK TO WEBSITE
          </button>
        </div>

        <div className="full-gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <div className="full-gallery-image" key={photo}>
              <img
                src={`https://images.unsplash.com/${photo}?w=1000`}
                alt={`FunFly Travel Photo ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="gallery-bottom-back">
          <button
            className="back-website-btn"
            onClick={() => {
              setShowPhotoGallery(false);
              window.scrollTo(0, 0);
            }}
          >
            ← BACK TO WEBSITE
          </button>
        </div>
      </div>
    );
  }

  // =====================================
  // AUTO QUOTATION GENERATOR PAGE
  // =====================================

  if (showQuotation) {
    return (
      <div className="quotation-page">
        <div className="quotation-header">
          <button onClick={closeQuotation}>
            ← Back to Website
          </button>

          <h2>FUNFLY HOLIDAYS</h2>
          <p>Holidays - Explode</p>
        </div>

        <div className="quotation-container">
          <div className="quotation-title">
            <span className="section-label">
              YOUR TRIP DETAILS
            </span>

            <h1>Auto Quotation Generator</h1>

            <p>Your journey, our responsibility.</p>
          </div>

          {/* PACKAGE SELECTION */}

          <div className="quotation-package">
            <span>SELECT YOUR PACKAGE</span>

            <select
              value={selectedPackage?.name || ""}
              onChange={handleQuotationPackageChange}
            >
              <option value="">Choose a tour package</option>

              {packages.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            {selectedPackage && (
              <>
                <h2>{selectedPackage.name}</h2>
                <p>{selectedPackage.category}</p>
                <p>{selectedPackage.days}</p>
              </>
            )}
          </div>

          {/* CUSTOMER DETAILS */}

          <div className="quotation-form">
            <h3>Customer Details</h3>

            <label>Customer Name *</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={quotationData.name}
              onChange={updateQuotation}
              required
            />

            <label>Mobile Number *</label>

            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              value={quotationData.mobile}
              onChange={updateQuotation}
              pattern="[+]?[0-9 ]{10,15}"
              required
            />

            <label>Travel Date *</label>

            <input
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              value={quotationData.date}
              onChange={updateQuotation}
              required
            />

            <label>Number of Persons *</label>

            <input
              type="number"
              name="persons"
              min="1"
              max="100"
              value={quotationData.persons}
              onChange={updateQuotation}
              required
            />
          </div>

          {/* QUOTATION SUMMARY */}

          <div className="quotation-summary">
            <h3>Quotation Summary</h3>

            <div>
              <span>Selected Package</span>
              <strong>
                {selectedPackage?.name || "Not selected"}
              </strong>
            </div>

            <div>
              <span>Price Per Person</span>

              <strong>
                ₹{packagePrice.toLocaleString("en-IN")}
              </strong>
            </div>

            <div>
              <span>Number of Persons</span>

              <strong>{quotationPersons}</strong>
            </div>

            <div className="quotation-total">
              <span>Total Amount</span>

              <strong>
                ₹{totalAmount.toLocaleString("en-IN")}
              </strong>
            </div>

            <p className="quotation-note">
              * Sample quotation only. Final package price may vary
              based on travel date and availability.
            </p>
          </div>

          {/* QUOTATION ACTIONS */}

          <div className="quotation-actions">
            <button
              type="button"
              className="quotation-pdf"
              onClick={() => window.print()}
            >
              Download PDF
            </button>

            <button
              type="button"
              className="quotation-whatsapp"
              onClick={shareQuotation}
              disabled={
                !selectedPackage ||
                !quotationData.name.trim() ||
                !quotationData.mobile.trim() ||
                !quotationData.date
              }
            >
              <MessageCircle size={17} />
              Share on WhatsApp
            </button>
          </div>

          {/* QUOTATION FOOTER */}

          <div className="quotation-footer">
            <h3>FUNFLY HOLIDAYS</h3>

            <p>+91 78100 65579</p>
            <p>syuvan171@gmail.com</p>
            <p>Namakkal, Tamil Nadu - 627015</p>
            <p>UDYAM-TN-14-0113923</p>
          </div>
        </div>
      </div>
    );
  }

  // =====================================
  // MAIN WEBSITE
  // =====================================

  return (
    <div className="website">

      {/* COMMON FIXED NAVBAR */}

      <header className="header">
        <a
          href="#home"
          className="logo-section"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/funfly-logo.png"
            alt="FunFly Logo"
          />

          <div className="logo-name">
            <h2>FUNFLY HOLIDAYS</h2>
            <span>Holidays-Explode</span>
          </div>
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <span>☰</span>}
        </button>

        <nav className={`navbar ${menuOpen ? "navbar-open" : ""}`}>
          <a
            href="#home"
            className={activeNav === "home" ? "nav-active" : ""}
            onClick={() => {
              setActiveNav("home");
              setMenuOpen(false);
            }}
          >
            <Home size={16} />
            Home
          </a>

          <a
            href="#packages"
            className={activeNav === "packages" ? "nav-active" : ""}
            onClick={() => {
              setActiveNav("packages");
              setMenuOpen(false);
            }}
          >
            <MapPin size={16} />
            Destinations
          </a>

          <a
            href="#gallery"
            className={activeNav === "gallery" ? "nav-active" : ""}
            onClick={() => {
              setActiveNav("gallery");
              setMenuOpen(false);
            }}
          >
            <Images size={16} />
            Gallery
          </a>

          <a
            href="#about"
            className={activeNav === "about" ? "nav-active" : ""}
            onClick={() => {
              setActiveNav("about");
              setMenuOpen(false);
            }}
          >
            <Info size={16} />
            About
          </a>

          <a
            href="#contact"
            className={activeNav === "contact" ? "nav-active" : ""}
            onClick={() => {
              setActiveNav("contact");
              setMenuOpen(false);
            }}
          >
            <Phone size={16} />
            Contact
          </a>
        </nav>

        {/* RIGHT SIDE */}

        <div className="header-right">
          <a
            href="tel:+917810065579"
            className="header-phone"
          >
            <span className="online-dot"></span>
            <Phone size={15} />
            +91 78100 65579
          </a>

          {/* TOP RIGHT BUTTON OPENS QUOTATION PAGE */}

          <button
            className="enquire-btn"
            onClick={openQuotation}
          >
            ENQUIRE NOW
            <Send size={15} />
          </button>
        </div>
      </header>

      {/* HOME SECTION */}

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">
            ✨ 100% CUSTOMIZED & SAFE TOUR PACKAGES
          </span>

          <h1>FUNFLY HOLIDAYS</h1>

          <h2>Best Travel Agency in Namakkal</h2>

          <p>
            From the misty tea hills of Munnar to the pristine
            beaches of Bali & thrilling College IV trips,
            create memories that last forever.
          </p>
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>8+ Years</h2>
            <p>Industry Experience</p>
          </div>

          <div className="stat-card">
            <h2>500+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h2>Govt. Regd</h2>
            <p>UDYAM-TN-14-0113923</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>On-Trip Manager Support</p>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}

      <section className="packages-section" id="packages">
        <div className="packages-heading">
          <div>
            <h2>Our Tour Packages</h2>

            <p>
              From stays and transport to local sightseeing,
              we've got your entire trip sorted.
            </p>
          </div>

          <button
            className="enquire-btn"
            onClick={() => openEnquiry()}
          >
            Enquire Now
            <Send size={15} />
          </button>
        </div>

        {/* CATEGORY FILTERS */}

        <div className="category-filters">
          <button
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => {
              setActiveCategory("All");
              setShowAll(false);
            }}
          >
            ✨ All Places (22)
          </button>

          <button
            className={activeCategory === "Kerala" ? "active" : ""}
            onClick={() => {
              setActiveCategory("Kerala");
              setShowAll(false);
            }}
          >
            🌴 Kerala (10)
          </button>

          <button
            className={activeCategory === "Karnataka" ? "active" : ""}
            onClick={() => {
              setActiveCategory("Karnataka");
              setShowAll(false);
            }}
          >
            🏞 Karnataka (6)
          </button>

          <button
            className={activeCategory === "Tamil Nadu" ? "active" : ""}
            onClick={() => {
              setActiveCategory("Tamil Nadu");
              setShowAll(false);
            }}
          >
            🛕 Tamil Nadu (6)
          </button>
        </div>

        {/* PACKAGE CARDS */}

        <div className="packages-grid">
          {visiblePackages.map((item) => (
            <div className="package-card" key={item.name}>
              <div className="package-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />

                <span className="package-tag">
                  {item.tag}
                </span>
              </div>

              <div className="package-details">
                <h3>{item.name}</h3>

                <div className="package-info">
                  <span>
                    <MapPin size={15} />
                    {item.category}
                  </span>

                  <span>
                    <Clock size={15} />
                    {item.days}
                  </span>
                </div>

                {/* PACKAGE BUTTON OPENS OLD ENQUIRY POPUP */}

                <button
                  className="package-enquire"
                  onClick={() => openEnquiry(item)}
                >
                  ENQUIRE NOW
                  <Send size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE */}

        {filteredPackages.length > 8 && (
          <div className="view-more-container">
            <button
              className="view-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "View Less ↑"
                : "View More Packages +"}
            </button>
          </div>
        )}
      </section>

      {/* WHY CHOOSE SECTION */}

      <section className="why-section" id="why-us">
        <div className="why-left">
          <span className="section-label">
            THE FUNFLY ADVANTAGE
          </span>

          <h2>
            Why Hundreds of Travelers Choose FunFly Holidays
          </h2>

          <p className="why-description">
            We believe a holiday shouldn't just be a hotel
            booking; it should be a memorable lifetime story
            without stress, rush, or surprise expenses.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <CheckCircle size={27} />
              <h3>Direct Local Network</h3>
              <p>
                No middlemen fees. We own direct contracts
                with premier resorts, houseboats, and
                verified luxury cabs.
              </p>
            </div>

            <div className="why-card">
              <CheckCircle size={27} />
              <h3>100% Tailored Itineraries</h3>
              <p>
                Travel at your own pace. We customize
                every hour to match your travel style.
              </p>
            </div>

            <div className="why-card">
              <CheckCircle size={27} />
              <h3>Dedicated Trip Coordinators</h3>
              <p>
                A personal trip coordinator supports
                you 24/7 until you return home safely.
              </p>
            </div>

            <div className="why-card">
              <CheckCircle size={27} />
              <h3>Best Rate Guarantee</h3>
              <p>
                Transparent quotes with clear bills
                and zero hidden checkout charges.
              </p>
            </div>
          </div>
        </div>

        <div className="why-right">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000"
            alt="Beautiful mountain destination"
          />

          <div className="rating-card">
            <div className="rating-icon">
              <Star size={25} fill="currentColor" />
            </div>

            <div>
              <h3>4.9 / 5.0 Rating</h3>
              <h4>500+ Happy Reviews</h4>

              <p>
                "Exceptional hospitality, on-time cab pickup
                and genuine care for families."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}

      <section className="gallery-section" id="gallery">
        <span className="section-label">
          REAL TRAVELLED MOMENTS
        </span>

        <h2>Captured Moments & Stories</h2>

        <div className="gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <div className="gallery-image" key={photo}>
              <img
                src={`https://images.unsplash.com/${photo}?w=700`}
                alt={`FunFly Travel Memory ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="gallery-button-container">
          <button
            className="view-gallery-btn"
            onClick={() => {
              setShowPhotoGallery(true);
              window.scrollTo(0, 0);
            }}
          >
            VIEW PHOTO GALLERY
            <Images size={18} />
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="about-section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000"
            alt="FunFly mountain travel"
          />

          <div className="experience-badge">
            <p>8+ Years Experience</p>
            <h3>Govt. Regd: UDYAM-TN-14-0113923</h3>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">
            ABOUT FUNFLY HOLIDAYS NAMAKKAL
          </span>

          <h2>
            Premier Tour Operator Based in Namakkal, Tamil Nadu
          </h2>

          <p>
            Founded with the vision to make travel seamless,
            trustworthy, and unforgettable, FUNFLY HOLIDAYS
            is headquartered in Namakkal, Tamil Nadu, and
            aims to make every journey memorable.
          </p>

          <p>
            Whether you are planning a family holiday in
            misty Munnar, an educational college industrial
            visit in Goa or Kerala, a serene pilgrimage to
            Rameshwaram, or group tours across Karnataka
            and Tamil Nadu, our team coordinates your trip
            with utmost care.
          </p>

          <div className="about-stats">
            <div>
              <h3>8+ Years</h3>
              <p>Experience</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Happy Trips</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Customer Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}

      <section className="reviews-section">
        <span className="section-label">
          TRAVELER STORIES
        </span>

        <h2>Loved by Hundreds of Happy Travelers</h2>

        <p>
          Read honest reviews from families, couples,
          and college groups who journeyed with us.
        </p>

        <div className="reviews-grid">
          {[
            {
              name: "Karthik R.",
              city: "Chennai",
              trip: "Cochin – Munnar, 2D/1N",
              review:
                "Our Munnar family trip arranged by FunFly was unbelievable! The driver was very polite, hotel had misty mountain views, and the pricing was super genuine. Highly recommended!",
            },
            {
              name: "Priya & Vignesh",
              city: "Coimbatore",
              trip: "Munnar & Alleppey Honeymoon",
              review:
                "Booked our honeymoon to Alleppey houseboat and Munnar. The candle light dinner and flower decoration were magical. 10/10 service by the team!",
            },
            {
              name: "Suresh Kumar",
              city: "Salem",
              trip: "Goa, College IV Tour",
              review:
                "Organized our college IV to Goa with 45 students. Everything from luxury bus, beach resort, buffet food, and party cruise was perfectly handled!",
            },
          ].map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-top">
                <div className="review-stars">
                  ★★★★★
                </div>

                <span>Verified Trip</span>
              </div>

              <p className="review-text">
                "{review.review}"
              </p>

              <div className="review-footer">
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.city}</span>
                </div>

                <div className="review-trip">
                  {review.trip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}

      <section className="faq-section">
        <span className="section-label">
          GOT QUESTIONS?
        </span>

        <h2>Frequently Asked Questions</h2>

        {[
          {
            q: "How do I book a tour package?",
            a: "Choose your preferred package and click Enquire Now. Fill in your details and send your enquiry through WhatsApp.",
          },
          {
            q: "Can I customize my travel package?",
            a: "Yes! FunFly Holidays offers customized travel packages based on your dates, budget, group size and preferences.",
          },
          {
            q: "Do you arrange college industrial visits?",
            a: "Yes! We coordinate college IV trips, including transport, accommodation, food and sightseeing.",
          },
          {
            q: "Is customer support available during the trip?",
            a: "Yes! We provide on-trip support to help coordinate your travel arrangements.",
          },
          {
            q: "Can I book a family or honeymoon package?",
            a: "Yes! We arrange family holidays, honeymoon trips and group tours.",
          },
        ].map((faq, index) => (
          <details className="faq-item" key={index}>
            <summary>
              {faq.q}
              <span>+</span>
            </summary>

            <p>{faq.a}</p>
          </details>
        ))}
      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section" id="contact">
        <div className="contact-left">
          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Plan Your Next Dream Vacation with Us
          </h2>

          <p className="contact-description">
            Have specific travel dates, group requirements,
            or budget constraints? Send us a message and
            our tour planning expert will prepare a custom
            plan for you.
          </p>

          <div className="contact-info-card">
            <Phone size={23} />
            <div>
              <span>Call / WhatsApp Support</span>
              <h3>7810065579</h3>
            </div>
          </div>

          <div className="contact-info-card">
            <Mail size={23} />
            <div>
              <span>Official Email</span>
              <h3>syuvan171@gmail.com</h3>
            </div>
          </div>

          <div className="contact-info-card">
            <MapPin size={23} />
            <div>
              <span>Head Office</span>
              <h3>Namakkal, Tamil Nadu – 627015</h3>
            </div>
          </div>

          <div className="contact-info-card">
            <Clock size={23} />
            <div>
              <span>Operating Hours</span>
              <h3>24/7 Available for Guests On Tour</h3>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}

        <div className="contact-form-card">
          <h2>Request a Free Callback</h2>

          <p>
            Fill out your travel preferences below.
          </p>

          <form onSubmit={handleEnquirySubmit}>
            <label>Your Name *</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label>Mobile Number *</label>

            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleInputChange}
              pattern="[+]?[0-9 ]{10,15}"
              required
            />

            <label>Interested Place</label>

            <select
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            >
              <option value="">Select destination</option>
              <option value="Kerala Tours">Kerala Tours</option>
              <option value="Tamil Nadu Tours">Tamil Nadu Tours</option>
              <option value="Karnataka Tours">Karnataka Tours</option>
              <option value="Honeymoon Specials">Honeymoon Specials</option>
              <option value="Goa / Group Tour">Goa / Group Tour</option>
              <option value="International Tours">International Tours</option>
            </select>

            <label>Email (Optional)</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleInputChange}
            />

            <label>Message / Requirements</label>

            <textarea
              placeholder="Tell us about your travel plans"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData((previous) => ({
                  ...previous,
                  message: e.target.value,
                }))
              }
            />

            <button
              type="submit"
              className="contact-submit"
            >
              Submit Travel Request
              <Send size={17} />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img
              src="/funfly-logo.png"
              alt="FunFly Holidays"
            />

            <p>
              Discover the world with FunFly Holidays.
              Your journey, our responsibility.
            </p>

            <p className="footer-reg">
              Regd: UDYAM-TN-14-0113923
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#packages">All Tour Packages</a>
            <a href="#gallery">Photo Gallery</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Support</a>
          </div>

          <div className="footer-team">
            <h3>Our Team</h3>

            <p>
              <strong>Founder:</strong> Yuvansankar
            </p>

            <p>
              <strong>Co-Founder:</strong> Tharun
            </p>

            <p>
              <strong>Travel Crew:</strong> Vikash, Dharun
            </p>

            <p>
              <strong>Coordinators:</strong> Deepak, Deepan, Joshva
            </p>
          </div>

          <div className="footer-contact">
            <h3>Direct Reach</h3>

            <p>+91 78100 65579</p>
            <p>syuvan171@gmail.com</p>
            <p>Namakkal, Tamil Nadu - 627015</p>

            <a
              href="https://www.instagram.com/fun_fly_holidays_offical_/"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                Instagram: @fun_fly_holidays_offical_
              </p>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 FunFly Holidays. All Rights Reserved.
        </div>
      </footer>

      {/* GENERAL ENQUIRY POPUP */}

      {showEnquiry && (
        <div
          className="enquiry-overlay"
          onClick={closeEnquiry}
        >
          <div
            className="enquiry-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="enquiry-header">
              <div>
                <span>
                  ENQUIRY & CUSTOMIZATION
                </span>

                <h2>
                  {selectedPackage?.name || "Plan Your Dream Trip"}
                </h2>

                <p>
                  {selectedPackage
                    ? `${selectedPackage.days} · Request a Quote`
                    : "Customised Travel Package"}
                </p>
              </div>

              <button
                className="close-enquiry"
                onClick={closeEnquiry}
                type="button"
              >
                <X size={23} />
              </button>
            </div>

            <form
              className="enquiry-form"
              onSubmit={handleEnquirySubmit}
            >
              <div className="form-group full-width">
                <label>Your Full Name *</label>

                <div className="input-wrapper">
                  <UserRound size={18} />

                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Mobile Number (WhatsApp) *</label>

                <div className="input-wrapper">
                  <Phone size={17} />

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    pattern="[+]?[0-9 ]{10,15}"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <div className="input-wrapper">
                  <Mail size={17} />

                  <input
                    type="email"
                    name="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Travel Date</label>

                <div className="input-wrapper">
                  <CalendarDays size={18} />

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Persons Count</label>

                <div className="input-wrapper">
                  <Users size={18} />

                  <input
                    type="number"
                    name="persons"
                    min="1"
                    max="100"
                    value={formData.persons}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Special Requests / Customizations</label>

                <textarea
                  name="message"
                  placeholder="e.g. Need hotel with mountain view, pickup from Coimbatore/Salem..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>

              <div className="enquiry-actions full-width">
                <button
                  type="submit"
                  className="send-enquiry"
                >
                  Send Enquiry
                </button>

                <button
                  type="button"
                  className="whatsapp-enquiry"
                  onClick={openWhatsApp}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/917810065579"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={29} />
      </a>
    </div>
  );
}

export default App;
