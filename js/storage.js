// NiyatBook - Local Storage Backend (Prototype / Launch-ready Frontend)
// All data persists in browser localStorage

const NB = {
  keys: {
    customers: 'niyatbook_customers',
    professionals: 'niyatbook_professionals',
    appointments: 'niyatbook_appointments',
    services: 'niyatbook_services',
    categories: 'niyatbook_categories',
    currentUser: 'niyatbook_currentUser',
    reviews: 'niyatbook_reviews'
  },

  init() {
    if (!localStorage.getItem('niyatbook_initialized_v2')) {
      this.seedData();
      localStorage.setItem('niyatbook_initialized_v2', 'true');
    }
  },

  seedData() {
    const categories = [
      { id: 'cat_health', name: 'Healthcare & Wellness', nameGu: 'આરોગ્ય & વેલનેસ', icon: '🏥' },
      { id: 'cat_legal', name: 'Legal Services', nameGu: 'કાનૂની સેવાઓ', icon: '⚖️' },
      { id: 'cat_finance', name: 'Finance & Accounting', nameGu: 'ફાઇનાન્સ & અકાઉન્ટિંગ', icon: '💼' },
      { id: 'cat_design', name: 'Design & Creative', nameGu: 'ડિઝાઇન & ક્રિએટિવ', icon: '🎨' },
      { id: 'cat_personal', name: 'Personal Care & Lifestyle', nameGu: 'પર્સનલ કેર', icon: '✂️' },
      { id: 'cat_education', name: 'Education & Career', nameGu: 'શિક્ષણ & કેરિયર', icon: '📚' },
      { id: 'cat_business', name: 'Business & Property', nameGu: 'બિઝનેસ & પ્રોપર્ટી', icon: '🏢' },
      { id: 'cat_animal', name: 'Animal Care', nameGu: 'પશુ સંભાળ', icon: '🐾' }
    ];
    localStorage.setItem(this.keys.categories, JSON.stringify(categories));

    const professionals = [
      {
        id: 'pro_1',
        name: 'Dr. Priya Sharma',
        email: 'priya.sharma@example.com',
        phone: '9876543210',
        password: 'demo123',
        category: 'cat_health',
        subcategory: 'General Physician',
        city: 'Jamnagar',
        area: 'Indira Gandhi Road',
        experience: 12,
        languages: ['Gujarati', 'Hindi', 'English'],
        bio: 'Experienced General Physician with focus on family health and preventive care.',
        verified: true,
        rating: 4.8,
        reviewCount: 47,
        workingHours: { start: '09:00', end: '18:00' },
        workingDays: [1,2,3,4,5,6],
        photo: null,
        createdAt: new Date().toISOString()
      },
      {
        id: 'pro_2',
        name: 'Adv. Rajesh Patel',
        email: 'rajesh.patel@example.com',
        phone: '9876543211',
        password: 'demo123',
        category: 'cat_legal',
        subcategory: 'Civil & Property Advocate',
        city: 'Ahmedabad',
        area: 'Navrangpura',
        experience: 15,
        languages: ['Gujarati', 'Hindi', 'English'],
        bio: 'Specialist in property disputes, civil litigation and documentation.',
        verified: true,
        rating: 4.6,
        reviewCount: 32,
        workingHours: { start: '10:00', end: '17:00' },
        workingDays: [1,2,3,4,5],
        photo: null,
        createdAt: new Date().toISOString()
      },
      {
        id: 'pro_3',
        name: 'CA Meera Desai',
        email: 'meera.desai@example.com',
        phone: '9876543212',
        password: 'demo123',
        category: 'cat_finance',
        subcategory: 'Chartered Accountant',
        city: 'Surat',
        area: 'Adajan',
        experience: 8,
        languages: ['Gujarati', 'English'],
        bio: 'Tax planning, GST, income tax returns and business advisory.',
        verified: true,
        rating: 4.9,
        reviewCount: 61,
        workingHours: { start: '09:30', end: '18:30' },
        workingDays: [1,2,3,4,5,6],
        photo: null,
        createdAt: new Date().toISOString()
      },
      {
        id: 'pro_4',
        name: 'Ar. Vikram Solanki',
        email: 'vikram.solanki@example.com',
        phone: '9876543213',
        password: 'demo123',
        category: 'cat_design',
        subcategory: 'Architect',
        city: 'Vadodara',
        area: 'Alkapuri',
        experience: 10,
        languages: ['Gujarati', 'Hindi', 'English'],
        bio: 'Residential and commercial architecture. Sustainable design specialist.',
        verified: true,
        rating: 4.7,
        reviewCount: 28,
        workingHours: { start: '10:00', end: '19:00' },
        workingDays: [1,2,3,4,5,6],
        photo: null,
        createdAt: new Date().toISOString()
      },
      {
        id: 'pro_5',
        name: 'Yoga Instructor Anjali',
        email: 'anjali.yoga@example.com',
        phone: '9876543214',
        password: 'demo123',
        category: 'cat_personal',
        subcategory: 'Yoga & Fitness Trainer',
        city: 'Jamnagar',
        area: 'Digvijay Plot',
        experience: 6,
        languages: ['Gujarati', 'Hindi'],
        bio: 'Hatha Yoga, Pranayama and personal fitness training. Online & offline sessions available.',
        verified: true,
        rating: 4.9,
        reviewCount: 89,
        workingHours: { start: '06:00', end: '20:00' },
        workingDays: [1,2,3,4,5,6,0],
        photo: null,
        createdAt: new Date().toISOString()
      },
      {
        id: 'pro_6',
        name: 'Dr. Ketan Mehta (Dentist)',
        email: 'ketan.mehta@example.com',
        phone: '9876543215',
        password: 'demo123',
        category: 'cat_health',
        subcategory: 'Dentist',
        city: 'Rajkot',
        area: 'Kalawad Road',
        experience: 9,
        languages: ['Gujarati', 'Hindi', 'English'],
        bio: 'Cosmetic dentistry, root canal, implants and pediatric dental care.',
        verified: true,
        rating: 4.8,
        reviewCount: 54,
        workingHours: { start: '09:00', end: '20:00' },
        workingDays: [1,2,3,4,5,6],
        photo: null,
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(this.keys.professionals, JSON.stringify(professionals));

    const services = [
      { id: 'svc_1', professionalId: 'pro_1', name: 'General Consultation', duration: 20, price: 400, buffer: 5, mode: 'in-person', active: true },
      { id: 'svc_2', professionalId: 'pro_1', name: 'Follow-up Visit', duration: 15, price: 250, buffer: 5, mode: 'in-person', active: true },
      { id: 'svc_3', professionalId: 'pro_2', name: 'Legal Consultation (30 min)', duration: 30, price: 1500, buffer: 10, mode: 'in-person', active: true },
      { id: 'svc_4', professionalId: 'pro_2', name: 'Document Review', duration: 45, price: 2500, buffer: 15, mode: 'in-person', active: true },
      { id: 'svc_5', professionalId: 'pro_3', name: 'ITR Filing Consultation', duration: 40, price: 999, buffer: 10, mode: 'in-person', active: true },
      { id: 'svc_6', professionalId: 'pro_3', name: 'GST Advisory', duration: 30, price: 1200, buffer: 10, mode: 'online', active: true },
      { id: 'svc_7', professionalId: 'pro_4', name: 'Architectural Consultation', duration: 60, price: 3000, buffer: 15, mode: 'in-person', active: true },
      { id: 'svc_8', professionalId: 'pro_5', name: 'Personal Yoga Session', duration: 60, price: 500, buffer: 10, mode: 'in-person', active: true },
      { id: 'svc_9', professionalId: 'pro_5', name: 'Online Yoga Class', duration: 45, price: 350, buffer: 5, mode: 'online', active: true },
      { id: 'svc_10', professionalId: 'pro_6', name: 'Dental Check-up', duration: 30, price: 600, buffer: 10, mode: 'in-person', active: true },
      { id: 'svc_11', professionalId: 'pro_6', name: 'Scaling & Cleaning', duration: 45, price: 1200, buffer: 15, mode: 'in-person', active: true }
    ];
    localStorage.setItem(this.keys.services, JSON.stringify(services));

    if (!localStorage.getItem(this.keys.customers)) {
      localStorage.setItem(this.keys.customers, JSON.stringify([]));
    }
    if (!localStorage.getItem(this.keys.appointments)) {
      localStorage.setItem(this.keys.appointments, JSON.stringify([]));
    }
    if (!localStorage.getItem(this.keys.reviews)) {
      localStorage.setItem(this.keys.reviews, JSON.stringify([]));
    }
  },

  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch {
      return [];
    }
  },

  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(this.keys.currentUser) || 'null');
    } catch {
      return null;
    }
  },

  setCurrentUser(user) {
    if (user) {
      localStorage.setItem(this.keys.currentUser, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.keys.currentUser);
    }
  },

  logout() {
    this.setCurrentUser(null);
    window.location.href = '../index.html';
  },

  registerCustomer(data) {
    const customers = this.get(this.keys.customers);
    if (customers.find(c => c.email === data.email)) {
      return { success: false, message: 'Email already registered' };
    }
    const newCustomer = {
      id: 'cust_' + Date.now(),
      ...data,
      role: 'customer',
      createdAt: new Date().toISOString()
    };
    customers.push(newCustomer);
    this.set(this.keys.customers, customers);
    return { success: true, user: newCustomer };
  },

  loginCustomer(email, password) {
    const customers = this.get(this.keys.customers);
    const user = customers.find(c => c.email === email && c.password === password);
    if (user) {
      this.setCurrentUser({ ...user, role: 'customer' });
      return { success: true, user };
    }
    return { success: false, message: 'Invalid email or password' };
  },

  registerProfessional(data) {
    const professionals = this.get(this.keys.professionals);
    if (professionals.find(p => p.email === data.email)) {
      return { success: false, message: 'Email already registered' };
    }
    const newPro = {
      id: 'pro_' + Date.now(),
      ...data,
      role: 'professional',
      verified: false,
      rating: 0,
      reviewCount: 0,
      workingHours: { start: '09:00', end: '18:00' },
      workingDays: [1,2,3,4,5,6],
      createdAt: new Date().toISOString()
    };
    professionals.push(newPro);
    this.set(this.keys.professionals, professionals);
    return { success: true, user: newPro };
  },

  loginProfessional(email, password) {
    const professionals = this.get(this.keys.professionals);
    const user = professionals.find(p => p.email === email && p.password === password);
    if (user) {
      this.setCurrentUser({ ...user, role: 'professional' });
      return { success: true, user };
    }
    if (email === 'priya.sharma@example.com' && password === 'demo123') {
      const demo = professionals.find(p => p.id === 'pro_1');
      this.setCurrentUser({ ...demo, role: 'professional' });
      return { success: true, user: demo };
    }
    return { success: false, message: 'Invalid email or password' };
  },

  getServicesByProfessional(proId) {
    return this.get(this.keys.services).filter(s => s.professionalId === proId && s.active);
  },

  addService(service) {
    const services = this.get(this.keys.services);
    service.id = 'svc_' + Date.now();
    service.active = true;
    services.push(service);
    this.set(this.keys.services, services);
    return service;
  },

  createAppointment(appt) {
    const appointments = this.get(this.keys.appointments);
    appt.id = 'appt_' + Date.now();
    appt.status = 'pending';
    appt.createdAt = new Date().toISOString();
    appointments.push(appt);
    this.set(this.keys.appointments, appointments);
    return appt;
  },

  getAppointmentsByCustomer(customerId) {
    return this.get(this.keys.appointments).filter(a => a.customerId === customerId);
  },

  getAppointmentsByProfessional(proId) {
    return this.get(this.keys.appointments).filter(a => a.professionalId === proId);
  },

  updateAppointmentStatus(apptId, status) {
    const appointments = this.get(this.keys.appointments);
    const idx = appointments.findIndex(a => a.id === apptId);
    if (idx !== -1) {
      appointments[idx].status = status;
      appointments[idx].updatedAt = new Date().toISOString();
      this.set(this.keys.appointments, appointments);
      return appointments[idx];
    }
    return null;
  },

  getAllProfessionals() {
    return this.get(this.keys.professionals);
  },

  getProfessional(id) {
    return this.get(this.keys.professionals).find(p => p.id === id);
  },

  getCategories() {
    return this.get(this.keys.categories);
  }
};

NB.init();
