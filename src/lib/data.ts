import {
  Cuboid,
  Film,
  Clapperboard,
  Scissors,
  PenTool,
  BrainCircuit,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  FileText,
  Youtube,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import type { Skill, Experience, Project, ProjectCategory, PortfolioData, Language } from './types';

export const skills: Skill[] = [
    { name: '3D Modeling & Rendering (Blender)', descriptionKey: 'blender_desc', icon: Cuboid },
    { name: 'Visual Effects (After Effects)', descriptionKey: 'vfx_desc', icon: Film },
    { name: 'Motion Graphics & Animation', descriptionKey: 'motion_desc', icon: Clapperboard },
    { name: 'Video Editing (Premiere, After Effects, CapCut)', descriptionKey: 'editing_desc', icon: Scissors },
    { name: 'Branding & Graphic Design', descriptionKey: 'branding_desc', icon: PenTool },
    { name: 'AI Tools', descriptionKey: 'ai_desc', icon: BrainCircuit },
  ];

export const experiences: { [key in Language]: Experience[] } = {
  en: [
    { 
      role: 'Content Creator', 
      company: 'Youtube',
      period: '2016 – Present',
      details: [
        'Managed and grew a gaming channel',
        'Created engaging content for a wide audience',
        'Edited and produced high-quality videos',
        'Designed thumbnails and branding materials'
      ]
    },
    { 
      role: 'Freelance Multimedia Artist', 
      company: 'Self-employed',
      period: '2019 – Present',
      details: [
        '3D models for product promotion (Blender)',
        'Marketing motion graphics & unique VFX (After Effects)',
        'Branding assets: logos, posters, menus, websites',
        'Creative solutions leveraging AI tools',
      ]
    },
    { 
      role: 'Creative Designer (Online)', 
      company: 'Remote/Online',
      period: '2016 – Present',
      details: [
        'Promotional videos using Adobe Suite & Blender',
        'Graphic design deliverables across campaigns',
        'Short-form editing (Reels) in Premiere, After Effects & CapCut',
      ]
    },
  ],
  ar: [
    { 
      role: 'صانع محتوى', 
      company: 'يوتيوب',
      period: '2016 – الآن',
      details: [
        'إدارة وتنمية قناة ألعاب',
        'إنشاء محتوى جذاب لجمهور واسع',
        'مونتاج وإنتاج فيديوهات عالية الجودة',
        'تصميم الصور المصغرة ومواد العلامة التجارية',
      ]
    },
    { 
      role: 'فنان ملتميديا مستقل', 
      company: 'عمل حر',
      period: '2019 – الآن',
      details: [
        'نماذج ثلاثية الأبعاد لترويج المنتجات (Blender)',
        'رسوم متحركة تسويقية ومؤثرات بصرية فريدة (After Effects)',
        'تصميم أصول العلامة التجارية: شعارات، ملصقات، قوائم، مواقع إلكترونية',
        'حلول إبداعية باستخدام أدوات الذكاء الاصطناعي',
      ]
    },
    { 
      role: 'مصمم مبدع (أونلاين)', 
      company: 'عن بعد/أونلاين',
      period: '2016 – الآن',
      details: [
        'فيديوهات ترويجية باستخدام Adobe Suite و Blender',
        'تسليمات تصميم جرافيك عبر الحملات',
        'تحرير الفيديوهات القصيرة (Reels) في Premiere و After Effects و CapCut',
      ]
    },
  ],
};

export const projectCategories: { [key in Language]: ProjectCategory[] } = {
    en: [
        { key: 'all', name: 'All' },
        { key: 'vfx', name: 'VFX' },
        { key: 'ads', name: 'Ads' },
        { key: 'animation', name: 'Animation' },
        { key: 'logo-intros', name: 'Logo Intros' },
        { key: 'gaming', name: 'Gaming' },
        { key: 'product-ads', name: 'Product Ads' },
        { key: 'posters-logos', name: 'Posters & Logos' },
        { key: '3d', name: '3D' },
        { key: 'job-ads', name: 'Job Ads' },
        { key: 'real-estate-ads', name: 'Real Estate Ads' },
        { key: 'ai-art', name: 'AI Art' },
        { key: 'branding', name: 'Branding'},
    ],
    ar: [
        { key: 'all', name: 'الكل' },
        { key: 'vfx', name: 'VFX' },
        { key: 'ads', name: 'إعلانات' },
        { key: 'animation', name: 'أنيميشن' },
        { key: 'logo-intros', name: 'مقدمات شعار' },
        { key: 'gaming', name: 'ألعاب' },
        { key: 'product-ads', name: 'إعلانات منتجات' },
        { key: 'posters-logos', name: 'ملصقات وشعارات' },
        { key: '3d', name: '3D' },
        { key: 'job-ads', name: 'إعلانات وظائف' },
        { key: 'real-estate-ads', name: 'إعلانات عقارية' },
        { key: 'ai-art', name: 'فن بالذكاء الاصطناعي' },
        { key: 'branding', name: 'علامة تجارية'},
    ]
};

const convertToPreviewUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const projects: Project[] = [
    // Videos
    { id: 1, titleKey: "vfx_shot_1", year: 2023, thumbnail: convertToPreviewUrl("19muEbIFV5BjtB04u6ArbAtoCClamBNMp"), url: "https://drive.google.com/file/d/19muEbIFV5BjtB04u6ArbAtoCClamBNMp/preview", type: 'video', categories: ['vfx'], aiHint: "visual effects" },
    { id: 2, titleKey: "vfx_shot_2", year: 2023, thumbnail: convertToPreviewUrl("1dMb2M1--DAw9B090AzRajKbI-Mw3HGdk"), url: "https://drive.google.com/file/d/1dMb2M1--DAw9B090AzRajKbI-Mw3HGdk/preview", type: 'video', categories: ['vfx'], aiHint: "abstract explosion" },
    { id: 3, titleKey: "vfx_shot_3", year: 2023, thumbnail: convertToPreviewUrl("14gB9KMJZ-eGu_6ysH2vhnlCQLGn1Wq8W"), url: "https://drive.google.com/file/d/14gB9KMJZ-eGu_6ysH2vhnlCQLGn1Wq8W/preview", type: 'video', categories: ['vfx'], aiHint: "digital particles" },
    { id: 4, titleKey: "vfx_shot_4", year: 2023, thumbnail: convertToPreviewUrl("1QPawUaIvJtvmCWSbbnUAxnl1qry7tEk_"), url: "https://drive.google.com/file/d/1QPawUaIvJtvmCWSbbnUAxnl1qry7tEk_/preview", type: 'video', categories: ['vfx'], aiHint: "glowing energy" },
    { id: 5, titleKey: "vfx_shot_5", year: 2023, thumbnail: convertToPreviewUrl("1ntNcZZVeF81a5ihBcg7MZq3kXr3oydtj"), url: "https://drive.google.com/file/d/1ntNcZZVeF81a5ihBcg7MZq3kXr3oydtj/preview", type: 'video', categories: ['vfx'], aiHint: "sci-fi interface" },
    { id: 6, titleKey: "character_animation", year: 2023, thumbnail: convertToPreviewUrl("1Ml5vpC_Y4sOENa5hcqg8PLn2m6ynFqck"), url: "https://drive.google.com/file/d/1Ml5vpC_Y4sOENa5hcqg8PLn2m6ynFqck/preview", type: 'video', categories: ['animation', '3d'], aiHint: "character animation" },
    { id: 7, titleKey: "kitchen_store_ad", year: 2023, thumbnail: convertToPreviewUrl("1qCJPJhFhLtaD37DcVOltbk4MGqw7g-fv"), url: "https://drive.google.com/file/d/1qCJPJhFhLtaD37DcVOltbk4MGqw7g-fv/preview", type: 'video', categories: ['ads'], aiHint: "modern kitchen" },
    { id: 8, titleKey: "clothing_store_ad_1", year: 2023, thumbnail: convertToPreviewUrl("1vyyRnUbv-NjazQKDQm5Yo8T1n120AlI7"), url: "https://drive.google.com/file/d/1vyyRnUbv-NjazQKDQm5Yo8T1n120AlI7/preview", type: 'video', categories: ['ads'], aiHint: "fashion promo" },
    { id: 9, titleKey: "clothing_store_ad_2", year: 2023, thumbnail: convertToPreviewUrl("10-EQ6B2EUtSUCJIIW8kwE59NTKYY0BRJ"), url: "https://drive.google.com/file/d/10-EQ6B2EUtSUCJIIW8kwE59NTKYY0BRJ/preview", type: 'video', categories: ['ads'], aiHint: "urban streetwear" },
    { id: 10, titleKey: "barber_shop_ad", year: 2023, thumbnail: convertToPreviewUrl("1KcRvN-IEPXDveio6cGg8H_d77H6HWMIM"), url: "https://drive.google.com/file/d/1KcRvN-IEPXDveio6cGg8H_d77H6HWMIM/preview", type: 'video', categories: ['ads'], aiHint: "barber shop" },
    { id: 11, titleKey: "travel_ad", year: 2023, thumbnail: convertToPreviewUrl("1TJui42ytzlhUOEKH3JukoQpYWZQnGb9Y"), url: "https://drive.google.com/file/d/1TJui42ytzlhUOEKH3JukoQpYWZQnGb9Y/preview", type: 'video', categories: ['ads'], aiHint: "travel montage" },
    { id: 12, titleKey: "logo_intro_1", year: 2023, thumbnail: convertToPreviewUrl("1l_HIN39_GkydzVy0f0VWlB5ueJKDo5yD"), url: "https://drive.google.com/file/d/1l_HIN39_GkydzVy0f0VWlB5ueJKDo5yD/preview", type: 'video', categories: ['logo-intros', 'animation'], aiHint: "logo animation" },
    { id: 13, titleKey: "logo_intro_2", year: 2023, thumbnail: convertToPreviewUrl("1L05EJb1ydx1f7kXzmGZkdnrS_QRFB4wW"), url: "https://drive.google.com/file/d/1L05EJb1ydx1f7kXzmGZkdnrS_QRFB4wW/preview", type: 'video', categories: ['logo-intros', 'animation'], aiHint: "corporate logo" },
    { id: 14, titleKey: "logo_intro_3", year: 2023, thumbnail: convertToPreviewUrl("1d-pD6Mms0BSSbjg-rpqp3eUo4ZVP2Mrx"), url: "https://drive.google.com/file/d/1d-pD6Mms0BSSbjg-rpqp3eUo4ZVP2Mrx/preview", type: 'video', categories: ['logo-intros', 'animation'], aiHint: "tech logo" },
    { id: 15, titleKey: "gaming_pubg_1", year: 2023, thumbnail: convertToPreviewUrl("1DAEejv9vUo8_nCG_FIjuI0PLAVh__rYE"), url: "https://drive.google.com/file/d/1DAEejv9vUo8_nCG_FIjuI0PLAVh__rYE/preview", type: 'video', categories: ['gaming'], aiHint: "gaming highlights" },
    { id: 16, titleKey: "gaming_pubg_2", year: 2023, thumbnail: convertToPreviewUrl("13RrNwu-vjPLpZY65LpKgmFF31j75SLxB"), url: "https://drive.google.com/file/d/13RrNwu-vjPLpZY65LpKgmFF31j75SLxB/preview", type: 'video', categories: ['gaming'], aiHint: "action gameplay" },
    { id: 17, titleKey: "gaming_pubg_3", year: 2023, thumbnail: convertToPreviewUrl("1pVDLIV-pYE5BglrYHCES2Xz70ls1Hjlv"), url: "https://drive.google.com/file/d/1pVDLIV-pYE5BglrYHCES2Xz70ls1Hjlv/preview", type: 'video', categories: ['gaming'], aiHint: "esports montage" },
    { id: 18, titleKey: "gaming_pubg_4", year: 2023, thumbnail: convertToPreviewUrl("1qibucVsbd_pkT67bV7rUMDQ8cyd9ZF1H"), url: "https://drive.google.com/file/d/1qibucVsbd_pkT67bV7rUMDQ8cyd9ZF1H/preview", type: 'video', categories: ['gaming'], aiHint: "first person" },
    { id: 19, titleKey: "gaming_pubg_5", year: 2023, thumbnail: convertToPreviewUrl("15C8pGC1qX8XclZj2CjM5r6k0Ap1cEz21"), url: "https://drive.google.com/file/d/15C8pGC1qX8XclZj2CjM5r6k0Ap1cEz21/preview", type: 'video', categories: ['gaming'], aiHint: "game battle" },
    
    // Photos
    { id: 20, titleKey: "lg_ad_1", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1nS2ekNFTbKJ4Cn--j8yd3d7Rl75sKiKN", url: "https://lh3.googleusercontent.com/d/1nS2ekNFTbKJ4Cn--j8yd3d7Rl75sKiKN", type: 'photo', categories: ['product-ads'], aiHint: "product advertisement" },
    { id: 21, titleKey: "lg_ad_2", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1rnogGMSHkI1ku5A81WNDQ3LZf4defNVB", url: "https://lh3.googleusercontent.com/d/1rnogGMSHkI1ku5A81WNDQ3LZf4defNVB", type: 'photo', categories: ['product-ads'], aiHint: "electronics ad" },
    { id: 22, titleKey: "lg_ad_3", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1NkdN2SzJjiLDFafbc7blJX7J0Gw9Bc2B", url: "https://lh3.googleusercontent.com/d/1NkdN2SzJjiLDFafbc7blJX7J0Gw9Bc2B", type: 'photo', categories: ['product-ads'], aiHint: "home appliance" },
    { id: 23, titleKey: "chicken_tikka_1", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1eO_51UxSl-nQx3yKHSoAy-8C_OtIH6BV", url: "https://lh3.googleusercontent.com/d/1eO_51UxSl-nQx3yKHSoAy-8C_OtIH6BV", type: 'photo', categories: ['posters-logos', 'ads'], aiHint: "food poster" },
    { id: 24, titleKey: "chicken_tikka_2", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1PoTqubeU-rXUTuJ_cqS6RBJslcKn91MQ", url: "https://lh3.googleusercontent.com/d/1PoTqubeU-rXUTuJ_cqS6RBJslcKn91MQ", type: 'photo', categories: ['posters-logos', 'ads'], aiHint: "restaurant menu" },
    { id: 25, titleKey: "chicken_tikka_3", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1-XqxkwjJdBgPwWImof3WPIIxJZxqW4WQ", url: "https://lh3.googleusercontent.com/d/1-XqxkwjJdBgPwWImof3WPIIxJZxqW4WQ", type: 'photo', categories: ['posters-logos', 'ads'], aiHint: "delicious food" },
    { id: 26, titleKey: "chicken_tikka_4", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1klUzCJy2Bk5I3guOFCHinP0DWbMo8rDZ", url: "https://lh3.googleusercontent.com/d/1klUzCJy2Bk5I3guOFCHinP0DWbMo8rDZ", type: 'photo', categories: ['posters-logos', 'ads'], aiHint: "grilled chicken" },
    { id: 27, titleKey: "chicken_tikka_5", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1lg-yh4JD0IPZUoQ8riqeJ17684Ly2YvQ", url: "https://lh3.googleusercontent.com/d/1lg-yh4JD0IPZUoQ8riqeJ17684Ly2YvQ", type: 'photo', categories: ['posters-logos', 'ads'], aiHint: "spicy dish" },
    { id: 28, titleKey: "business_card_1", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1Qf-cvetmSJ17nKzFmV68I5V583KHx2kC", url: "https://lh3.googleusercontent.com/d/1Qf-cvetmSJ17nKzFmV68I5V583KHx2kC", type: 'photo', categories: ['3d', 'branding'], aiHint: "business card" },
    { id: 29, titleKey: "business_card_2", year: 2023, thumbnail: convertToPreviewUrl("1xqjpvNP7MtpJqB3QMgLoFLncma1DL065"), url: "https://drive.google.com/file/d/1xqjpvNP7MtpJqB3QMgLoFLncma1DL065/view?usp=drive_link", type: 'photo', categories: ['3d', 'branding'], aiHint: "corporate identity" },
    { id: 30, titleKey: "design_3d_3", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1U_kZi_IV-G2V89-xsfN8dmtSPGuBtZZA", url: "https://lh3.googleusercontent.com/d/1U_kZi_IV-G2V89-xsfN8dmtSPGuBtZZA", type: 'photo', categories: ['3d'], aiHint: "3d model" },
    { id: 31, titleKey: "design_3d_4", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1Bfdjc4j-drcZLNJMvdakze2uNXMURPl1", url: "https://lh3.googleusercontent.com/d/1Bfdjc4j-drcZLNJMvdakze2uNXMURPl1", type: 'photo', categories: ['3d'], aiHint: "abstract render" },
    { id: 32, titleKey: "design_3d_5", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1xCohqDFu2RVnPy1hI8xrRm4ogE16kys3", url: "https://lh3.googleusercontent.com/d/1xCohqDFu2RVnPy1hI8xrRm4ogE16kys3", type: 'photo', categories: ['3d'], aiHint: "product visualization" },
    { id: 33, titleKey: "job_ad_1", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1CLJ_UMXm_L7d-eJQEfehjcs4M6UugNry", url: "https://lh3.googleusercontent.com/d/1CLJ_UMXm_L7d-eJQEfehjcs4M6UugNry", type: 'photo', categories: ['job-ads', 'ads'], aiHint: "hiring poster" },
    { id: 34, titleKey: "job_ad_2", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1_pF3ll146Qe3m-oXfEyf2_SWqM3L7DCf", url: "https://lh3.googleusercontent.com/d/1_pF3ll146Qe3m-oXfEyf2_SWqM3L7DCf", type: 'photo', categories: ['job-ads', 'ads'], aiHint: "recruitment ad" },
    { id: 35, titleKey: "job_ad_3", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1ZVk9FgLueVwMkYJ8jXVUUojFEc4B3U0v", url: "https://lh3.googleusercontent.com/d/1ZVk9FgLueVwMkYJ8jXVUUojFEc4B3U0v", type: 'photo', categories: ['job-ads', 'ads'], aiHint: "we are hiring" },
    { id: 36, titleKey: "job_ad_4", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1--k0P_vyBGQsMXOl7awaEPFVwEjDzAmJ", url: "https://lh3.googleusercontent.com/d/1--k0P_vyBGQsMXOl7awaEPFVwEjDzAmJ", type: 'photo', categories: ['job-ads', 'ads'], aiHint: "join our team" },
    { id: 37, titleKey: "real_estate_1", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1ciKBN_boJfZ6tZl0FdM8REcOCaf1h935", url: "https://lh3.googleusercontent.com/d/1ciKBN_boJfZ6tZl0FdM8REcOCaf1h935", type: 'photo', categories: ['real-estate-ads', 'ads'], aiHint: "real estate" },
    { id: 38, titleKey: "real_estate_2", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1RUeXSyme5LeTFD-Ef5ZnlNzMWAxzUjlh", url: "https://lh3.googleusercontent.com/d/1RUeXSyme5LeTFD-Ef5ZnlNzMWAxzUjlh", type: 'photo', categories: ['real-estate-ads', 'ads'], aiHint: "luxury property" },
    { id: 39, titleKey: "real_estate_3", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1AMRaAOt2nYuRE2gBy0CyQz7QZQn7J6ft", url: "https://lh3.googleusercontent.com/d/1AMRaAOt2nYuRE2gBy0CyQz7QZQn7J6ft", type: 'photo', categories: ['real-estate-ads', 'ads'], aiHint: "modern apartment" },
    { id: 40, titleKey: "real_estate_4", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1NujbWZ43ALRQeSrVvkO07ZgtSNrqPd6Z", url: "https://lh3.googleusercontent.com/d/1NujbWZ43ALRQeSrVvkO07ZgtSNrqPd6Z", type: 'photo', categories: ['real-estate-ads', 'ads'], aiHint: "dream home" },
    { id: 41, titleKey: "real_estate_5", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1B2FuFdRAvqWExgBC6Dkv7C1KE1uLcVrP", url: "https://lh3.googleusercontent.com/d/1B2FuFdRAvqWExgBC6Dkv7C1KE1uLcVrP", type: 'photo', categories: ['real-estate-ads', 'ads'], aiHint: "house for sale" },
    { id: 42, titleKey: "real_estate_6", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1qRUm7pv0M2P32rc7Od0FeDVYwE92VfGo", url: "https://lh3.googleusercontent.com/d/1qRUm7pv0M2P32rc7Od0FeDVYwE92VfGo", type: 'photo', categories: ['real-estate-ads', 'ads'], aiHint: "villa architecture" },
    { id: 43, titleKey: "real_estate_7", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1hTbylX2T4dZuCR6mqD-UR1oWhNMHEd7L", url: "https://lh3.googleusercontent.com/d/1hTbylX2T4dZuCR6mqD-UR1oWhNMHEd7L", type: 'photo', categories: ['real-estate-ads', 'ads'], aiHint: "urban living" },
    { id: 46, titleKey: "ai_logos_2", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1VJb5S2U9aRWgyp73SJvrfu_KYXxYQX-q", url: "https://lh3.googleusercontent.com/d/1VJb5S2U9aRWgyp73SJvrfu_KYXxYQX-q", type: 'photo', categories: ['ai-art', 'posters-logos'], aiHint: "generated logos" },
    { id: 47, titleKey: "ai_logos_3", year: 2023, thumbnail: "https://lh3.googleusercontent.com/d/1nNoORLoSObRtrxT578tVtgMr_mD8kZO4", url: "https://lh3.googleusercontent.com/d/1nNoORLoSObRtrxT578tVtgMr_mD8kZO4", type: 'photo', categories: ['ai-art', 'posters-logos'], aiHint: "ai branding" },
];


export const portfolioData: PortfolioData = {
  en: {
    nav: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    hero: {
      name: 'Khaled Mohamed',
      roles: ['Multimedia Artist', 'Creative Designer', '3D Animator'],
      bio: 'A passionate creator with a Computer Science background (AOU, 2023). I craft visually compelling content across 3D, VFX, motion graphics, and short-form edits—exploring AI tools to push ideas further.',
      cta: 'Download CV',
      contact_cta: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      bio: 'A passionate creator with a Computer Science background (AOU, 2023). I craft visually compelling content across 3D, VFX, motion graphics, and short-form edits—exploring AI tools to push ideas further.',
      educationTitle: 'Education',
      education: 'College of Technology & Information – Computer Science, AOU, 2023.',
    },
    skills: {
        title: 'Skills',
        descriptions: {
          blender_desc: 'Creating stunning 3D models and photorealistic renders',
          vfx_desc: 'Professional VFX and compositing',
          motion_desc: 'Dynamic motion graphics and character animation',
          editing_desc: 'Professional video editing and color grading',
          branding_desc: 'Complete branding solutions and graphic design',
          ai_desc: 'Leveraging AI for enhanced creative workflows',
        },
      },
    experience: {
      title: 'Experience',
    },
    projects: {
      title: 'My Projects',
      video_folder: 'Video Projects Folder',
      photo_folder: 'Photo Projects Folder',
      tabs: {
        videos: 'Videos',
        photos: 'Photos',
      },
      project_titles: {
        vfx_shot_1: 'VFX Shot 01',
        vfx_shot_2: 'VFX Shot 02',
        vfx_shot_3: 'VFX Shot 03',
        vfx_shot_4: 'VFX Shot 04',
        vfx_shot_5: 'VFX Shot 05',
        character_animation: 'Character Animation',
        kitchen_store_ad: 'Kitchen Store Ad',
        clothing_store_ad_1: 'Clothing Store Ad 1',
        clothing_store_ad_2: 'Clothing Store Ad 2',
        barber_shop_ad: 'Barber Shop Ad',
        travel_ad: 'Travel Ad',
        logo_intro_1: 'Logo Intro 1',
        logo_intro_2: 'Logo Intro 2',
        logo_intro_3: 'Logo Intro 3',
        gaming_pubg_1: 'Gaming Montage 1',
        gaming_pubg_2: 'Gaming Montage 2',
        gaming_pubg_3: 'Gaming Montage 3',
        gaming_pubg_4: 'Gaming Montage 4',
        gaming_pubg_5: 'Gaming Montage 5',
        lg_ad_1: 'LG Ad 1',
        lg_ad_2: 'LG Ad 2',
        lg_ad_3: 'LG Ad 3',
        chicken_tikka_1: 'Chicken Tikka Ad 1',
        chicken_tikka_2: 'Chicken Tikka Ad 2',
        chicken_tikka_3: 'Chicken Tikka Ad 3',
        chicken_tikka_4: 'Chicken Tikka Ad 4',
        chicken_tikka_5: 'Chicken Tikka Ad 5',
        business_card_1: 'Business Card Design 1',
        business_card_2: 'Business Card Design 2',
        design_3d_3: '3D Design 3',
        design_3d_4: '3D Design 4',
        design_3d_5: '3D Design 5',
        job_ad_1: 'Job Ad Design 1',
        job_ad_2: 'Job Ad Design 2',
        job_ad_3: 'Job Ad Design 3',
        job_ad_4: 'Job Ad Design 4',
        real_estate_1: 'Real Estate Ad 1',
        real_estate_2: 'Real Estate Ad 2',
        real_estate_3: 'Real Estate Ad 3',
        real_estate_4: 'Real Estate Ad 4',
        real_estate_5: 'Real Estate Ad 5',
        real_estate_6: 'Real Estate Ad 6',
        real_estate_7: 'Real Estate Ad 7',
        ai_logos_2: 'AI Logos Example 2',
        ai_logos_3: 'AI Logos Example 3',
      },
    },
    contact: {
      title: 'Get In Touch',
      description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      form: {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Your Phone',
        details: 'Project Details',
        submit: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
    },
    footer: {
      copyright: 'Copyright © 2025 Khaled Mohamed. All rights reserved.',
    },
  },
  ar: {
    nav: [
      { name: 'عني', href: '#about' },
      { name: 'المهارات', href: '#skills' },
      { name: 'الخبرة', href: '#experience' },
      { name: 'المشاريع', href: '#projects' },
      { name: 'تواصل', href: '#contact' },
    ],
    hero: {
      name: 'خالد محمد',
      roles: ['فنان مالتي ميديا', 'مصمم كرييتف', 'أنيميتور 3D'],
      bio: 'مبدع شغوف بخلفية علوم حاسبات (الجامعة العربية المفتوحة 2023). بصمّم محتوى بصري قوي في 3D و VFX وموشن جرافيك وتحرير فيديوهات قصيرة، وبستكشف أدوات الذكاء الاصطناعي دايمًا عشان أرفع جودة الفكرة.',
      cta: 'تحميل السيرة الذاتية',
      contact_cta: 'تواصل معي',
    },
    about: {
      title: 'عني',
      bio: 'مبدع شغوف بخلفية علوم حاسبات (الجامعة العربية المفتوحة 2023). بصمّم محتوى بصري قوي في 3D و VFX وموشن جرافيك وتحرير فيديوهات قصيرة، وبستكشف أدوات الذكاء الاصطناعي دايمًا عشان أرفع جودة الفكرة.',
      educationTitle: 'التعليم',
      education: 'كلية التقنية والمعلومات – علوم الحاسب، الجامعة العربية المفتوحة، 2023.',
    },
    skills: {
        title: 'المهارات',
        descriptions: {
          blender_desc: 'إنشاء نماذج ثلاثية الأبعاد مذهلة وعروض واقعية',
          vfx_desc: 'مؤثرات بصرية احترافية وتركيب',
          motion_desc: 'رسوم متحركة ديناميكية وتحريك شخصيات',
          editing_desc: 'مونتاج وتصحيح ألوان احترافي للفيديو',
          branding_desc: 'حلول علامات تجارية كاملة وتصميم جرافيك',
          ai_desc: 'استخدام الذكاء الاصطناعي لتعزيز عمليات الإبداع',
        },
      },
    experience: {
      title: 'الخبرة',
    },
    projects: {
      title: 'مشاريعي',
      video_folder: 'مجلد مشاريع الفيديو',
      photo_folder: 'مجلد مشاريع الصور',
      tabs: {
        videos: 'فيديوهات',
        photos: 'صور',
      },
      project_titles: {
        vfx_shot_1: 'مشهد VFX 01',
        vfx_shot_2: 'مشهد VFX 02',
        vfx_shot_3: 'مشهد VFX 03',
        vfx_shot_4: 'مشهد VFX 04',
        vfx_shot_5: 'مشهد VFX 05',
        character_animation: 'تحريك شخصيات',
        kitchen_store_ad: 'إعلان متجر مطابخ',
        clothing_store_ad_1: 'إعلان متجر ملابس 1',
        clothing_store_ad_2: 'إعلان متجر ملابس 2',
        barber_shop_ad: 'إعلان محل حلاقة',
        travel_ad: 'إعلان سفر',
        logo_intro_1: 'مقدمة شعار 1',
        logo_intro_2: 'مقدمة شعار 2',
        logo_intro_3: 'مقدمة شعار 3',
        gaming_pubg_1: 'مونتاج ألعاب 1',
        gaming_pubg_2: 'مونتاج ألعاب 2',
        gaming_pubg_3: 'مونتاج ألعاب 3',
        gaming_pubg_4: 'مونتاج ألعاب 4',
        gaming_pubg_5: 'مونتاج ألعاب 5',
        lg_ad_1: 'إعلان LG 1',
        lg_ad_2: 'إعلان LG 2',
        lg_ad_3: 'إعلان LG 3',
        chicken_tikka_1: 'إعلان دجاج تكا 1',
        chicken_tikka_2: 'إعلان دجاج تكا 2',
        chicken_tikka_3: 'إعلان دجاج تكا 3',
        chicken_tikka_4: 'إعلان دجاج تكا 4',
        chicken_tikka_5: 'إعلان دجاج تكا 5',
        business_card_1: 'تصميم بطاقة عمل 1',
        business_card_2: 'تصميم بطاقة عمل 2',
        design_3d_3: 'تصميم 3D 3',
        design_3d_4: 'تصميم 3D 4',
        design_3d_5: 'تصميم 3D 5',
        job_ad_1: 'تصميم إعلان وظيفة 1',
        job_ad_2: 'تصميم إعلان وظيفة 2',
        job_ad_3: 'تصميم إعلان وظيفة 3',
        job_ad_4: 'تصميم إعلان وظيفة 4',
        real_estate_1: 'إعلان عقاري 1',
        real_estate_2: 'إعلان عقاري 2',
        real_estate_3: 'إعلان عقاري 3',
        real_estate_4: 'إعلان عقاري 4',
        real_estate_5: 'إعلان عقاري 5',
        real_estate_6: 'إعلان عقاري 6',
        real_estate_7: 'إعلان عقاري 7',
        ai_logos_2: 'مثال شعارات AI 2',
        ai_logos_3: 'مثال شعارات AI 3',
      },
    },
    contact: {
      title: 'تواصل معي',
      description: "أنا دائمًا منفتح لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو الفرص لأكون جزءًا من رؤيتك.",
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        details: 'تفاصيل المشروع',
        submit: 'إرسال الرسالة',
        success: 'تم إرسال الرسالة بنجاح!',
        error: 'فشل إرسال الرسالة. الرجاء المحاولة مرة أخرى.',
      },
    },
    footer: {
      copyright: 'حقوق النشر © 2025 خالد محمد. جميع الحقوق محفوظة.',
    },
  },
};

export const socialLinks = [
    { name: 'Email', href: 'mailto:khalerdkolkolkol@gmail.com', icon: Mail },
    { name: 'Phone', href: 'https://wa.me/+201060241230', icon: MessageCircle },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/khaled-mohamed-a895a6320/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/samiensa1/', icon: Instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/samiensa1/', icon: Facebook },
    { name: 'Youtube', href: 'https://www.youtube.com/@samiensa', icon: Youtube}
];

export const cvLink = {
  en: 'https://filebin.net/b0dwm80ydhbg21mw/khaled%20mohamed.pdf',
  ar: 'https://filebin.net/b0dwm80ydhbg21mw/khaled%20mohamed.pdf', // Assuming same CV link
};

export const folderLinks = {
  video: 'https://drive.google.com/drive/folders/1mExmp2nQB6KKFFDwRJjYCHLytyMLsISW?usp=sharing',
  photo: 'https://drive.google.com/drive/folders/1k9gRftLTzchLB6mZ3Aa3Y4odWYesCUg3?usp=sharing',
}
