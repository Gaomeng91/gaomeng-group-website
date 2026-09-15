const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

const translations = {
  'Skip to content': '跳至正文',
  'University of Macau': '澳门大学',
  'Home': '首页',
  'Research': '研究方向',
  'People': '团队成员',
  'Publications': '发表论文',
  'News': '新闻动态',
  'Join Us': '加入我们',
  'Contact': '联系我们',
  'Flexible Electronics · Biointerfaces · Smart Materials': '柔性电子 · 生物界面 · 智能材料',
  'Institute of Applied Physics and Materials Engineering (IAPME)': '应用物理及材料工程研究院（IAPME）',
  'Explore our research': '探索我们的研究',
  'Join the group': '加入课题组',
  'Interdisciplinary': '交叉融合',
  'Materials · Mechanics · Manufacturing': '材料 · 力学 · 制造',
  'Human-centered': '以人为本',
  'Interfaces designed around the body': '围绕人体设计的智能界面',
  'Sustainable': '可持续发展',
  'Responsible materials and processes': '负责任的材料与工艺',
  'Research directions': '研究方向',
  'Materials and devices that move with people and adapt to the world.': '与人体协同、适应环境的材料与器件。',
  'We investigate soft functional materials, biointegrated devices, and scalable manufacturing approaches for the next generation of intelligent electronics.': '我们研究软体功能材料、生物集成器件和可规模化制造方法，推动下一代智能电子技术的发展。',
  'Flexible and wearable electronics': '柔性与可穿戴电子',
  'Compliant sensors and systems engineered for reliable function under motion and deformation.': '开发在运动和形变条件下仍能稳定工作的柔性传感器与系统。',
  'Biointerfaces and epidermal electronics': '生物界面与表皮电子',
  'Soft, skin-compatible interfaces that bridge biological signals and digital systems.': '构建连接生物信号与数字系统的柔软、皮肤兼容界面。',
  'Smart adhesion and stiffness-variable materials': '智能粘附与变刚度材料',
  'Adaptive materials with programmable mechanics and controllable interfacial properties.': '研究具有可编程力学性能和可控界面特性的自适应材料。',
  'Printed and additive manufacturing': '印刷与增材制造',
  'Scalable fabrication methods for complex, customized, and multifunctional devices.': '面向复杂、定制化和多功能器件的可规模化制造方法。',
  'Sustainable electronics': '可持续电子',
  'Materials and device strategies that reduce waste and support responsible technology lifecycles.': '通过材料与器件策略减少废弃物，推动负责任的技术生命周期。',
  'Our approach': '研究方法',
  'Fundamental materials research, translated through purposeful engineering.': '以基础材料研究为起点，通过工程设计实现转化。',
  'Our group brings together materials science, mechanical design, advanced manufacturing, and biointerface engineering. We aim to understand the principles that make soft systems work—and use those insights to create technologies with real human relevance.': '本课题组融合材料科学、机械设计、先进制造与生物界面工程，致力于理解软体系统的工作原理，并据此开发真正服务于人的技术。',
  'Discover': '发现',
  'Reveal relationships between structure, mechanics, and function.': '揭示结构、力学与功能之间的关系。',
  'Design': '设计',
  'Translate scientific understanding into robust devices and interfaces.': '将科学认识转化为可靠的器件与界面。',
  'Deliver': '转化',
  'Advance scalable, accessible, and environmentally conscious solutions.': '推动可规模化、可普及且兼顾环境责任的解决方案。',
  'Latest updates': '最新动态',
  'From the group': '课题组动态',
  'Month Year': '月份 年份',
  'Read more': '阅读更多',
  'Curious about working at the interface of materials and people?': '期待探索材料与人体之间的界面？',
  'We welcome motivated researchers from materials science, engineering, physics, chemistry, and related fields.': '我们欢迎来自材料科学、工程、物理、化学及相关领域的优秀研究者。',
  'View opportunities': '查看机会',
  'Explore': '探索',
  'Connect': '联系',
  'University of Macau · Macau SAR, China': '澳门大学 · 中国澳门特别行政区',
  'What we investigate': '我们的研究',
  'We develop soft materials, adaptive interfaces, and manufacturing methods that connect rigorous materials science with human-centered applications.': '我们开发软体材料、自适应界面与先进制造方法，将严谨的材料科学与以人为本的应用相结合。',
  'Research philosophy': '研究理念',
  'Connecting structure, mechanics, and function': '连接结构、力学与功能',
  'Our research begins with a fundamental question: how can materials and devices interact seamlessly with complex, dynamic environments? We combine materials design, mechanics, fabrication, and device engineering to investigate this question across multiple scales.': '我们的研究始于一个基本问题：材料与器件如何在复杂、动态的环境中实现无缝交互？我们结合材料设计、力学、制造与器件工程，从多个尺度探索这一问题。',
  'Five directions': '五个方向',
  'A focused, interdisciplinary program': '聚焦而交叉的研究体系',
  'Designing sensors, conductors, and integrated systems that maintain performance while bending, stretching, and conforming to complex surfaces.': '设计可弯曲、拉伸并贴合复杂表面，同时保持稳定性能的传感器、导体与集成系统。',
  'Developing thin, soft, skin-compatible platforms for sensing, stimulation, monitoring, and seamless interaction with the human body.': '开发轻薄、柔软且皮肤兼容的平台，用于传感、刺激、监测及与人体的无缝交互。',
  'Creating adaptive systems that actively tune stiffness or adhesion in response to physical, electrical, thermal, or environmental inputs.': '构建可响应物理、电、热或环境输入，主动调节刚度或粘附性能的自适应系统。',
  'Exploring digital fabrication, functional inks, and process–structure relationships for rapid, scalable production of multifunctional devices.': '探索数字制造、功能墨水及工艺—结构关系，实现多功能器件的快速规模化制备。',
  'Investigating responsible material choices, reduced-waste processes, recoverable components, and device architectures designed for circularity.': '研究负责任的材料选择、低废弃工艺、可回收组件及面向循环利用的器件架构。',
  'From idea to impact': '从构想到影响',
  'Research that crosses disciplinary boundaries': '跨越学科边界的研究',
  'Projects in the group may combine polymer science, functional materials, interfacial mechanics, printing, device fabrication, electronics, and biological validation. This integrated approach helps us pursue both new scientific understanding and useful technology.': '课题组项目融合高分子科学、功能材料、界面力学、印刷制造、器件制备、电子学与生物验证，以一体化方法同时追求科学新知与实用技术。',
  'Explore publications': '浏览发表论文',
  'Interested in collaborating?': '有兴趣开展合作？',
  'We value productive connections across disciplines, institutions, and application areas.': '我们重视跨学科、跨机构和跨应用领域的高质量合作。',
  'Get in touch': '联系我们',
  'Our group': '我们的团队',
  'A collaborative research environment for scientists and engineers working across materials, mechanics, manufacturing, and biointerfaces.': '为材料、力学、制造及生物界面领域的科学家与工程师营造开放协作的研究环境。',
  'Principal investigator': '课题组负责人',
  'Principal Investigator · IAPME': '课题组负责人 · IAPME',
  'Researchers': '研究人员',
  'Group members': '团队成员',
  'Member Name': '成员姓名',
  'Postdoctoral Researcher': '博士后研究员',
  'PhD Student': '博士研究生',
  'Research Assistant': '研究助理',
  'Master’s Student': '硕士研究生',
  'Visiting Student': '访问学生',
  'Research focus or short biography placeholder.': '研究方向或个人简介占位内容。',
  'Become part of the group.': '成为团队的一员。',
  'We welcome researchers who are curious, rigorous, collaborative, and motivated by meaningful scientific problems.': '我们欢迎富有好奇心、严谨协作并致力于重要科学问题的研究者。',
  'Scholarly work': '学术成果',
  'Selected journal articles, conference contributions, and other research outputs from the group.': '课题组精选期刊论文、会议成果及其他研究产出。',
  'Publication list': '论文列表',
  'Flexible electronics': '柔性电子',
  'Biointerfaces': '生物界面',
  'Smart materials': '智能材料',
  'Manufacturing': '先进制造',
  'Sustainability': '可持续发展',
  'Research profiles': '学术主页',
  'Complete publication record': '完整发表记录',
  'Group updates': '课题组动态',
  'Research highlights, publications, awards, conferences, and life in the Meng Gao Research Group.': '分享课题组的研究亮点、论文、奖项、会议活动与团队生活。',
  'Latest': '最新动态',
  'New publication placeholder': '新论文占位内容',
  'Conference presentation placeholder': '会议报告占位内容',
  'Award or funding announcement placeholder': '奖项或基金公告占位内容',
  'Welcome to the group placeholder': '欢迎新成员占位内容',
  'Placeholder content': '占位内容',
  'Opportunities': '加入机会',
  'We are interested in hearing from thoughtful, motivated researchers who want to explore soft materials, wearable technologies, and biointegrated systems.': '我们期待与希望探索软体材料、可穿戴技术和生物集成系统的优秀研究者交流。',
  'Open pathways': '开放机会',
  'Build ambitious research with us.': '与我们共同开展富有抱负的研究。',
  'PhD students': '博士研究生',
  'Postdoctoral researchers': '博士后研究员',
  'Research students': '研究学生',
  'How to inquire': '申请方式',
  'Introduce your interests clearly': '清晰介绍你的研究兴趣',
  'To help us understand your background and fit, please prepare a concise email explaining why our research interests you and how your experience could contribute.': '请用简洁的邮件介绍你的背景、与课题组的契合点、感兴趣的研究方向，以及你的经验可以如何作出贡献。',
  'Curriculum vitae, including education and research experience': '个人简历，包括教育与研究经历',
  'A brief statement of research interests and relevant skills': '简要的研究兴趣与相关技能说明',
  'Academic transcripts or a concise grade summary': '成绩单或简明成绩概况',
  'Representative publication, thesis, portfolio, or project link if available': '代表性论文、学位论文、作品集或项目链接（如有）',
  'Your preferred start date and the position type you are seeking': '期望入职时间及申请职位类型',
  'Ready to start a conversation?': '准备好开始交流了吗？',
  'Review our research directions, then send a focused inquiry with the materials listed above.': '请先了解我们的研究方向，再随上述材料发送一封有针对性的咨询邮件。',
  'Contact the group': '联系课题组',
  'For research discussions, collaboration, or prospective-member inquiries, please contact the group using the details below.': '如需讨论研究合作或咨询加入课题组，请通过以下方式联系我们。',
  'Affiliation': '所属机构',
  'Institute of Applied Physics and Materials Engineering (IAPME), University of Macau': '澳门大学应用物理及材料工程研究院（IAPME）',
  'Office': '办公室',
  'Room 6024, Building N23, University of Macau, Macao, China': '中国澳门，澳门大学 N23 楼 6024 室',
  'Email': '电子邮箱',
  'Tel': '电话',
  'Open University of Macau Campus Map': '打开澳门大学校园地图',
  'Before emailing': '发送邮件前',
  'Prospective researchers': '申请加入',
  'If you are interested in joining the group, please first review the research and Join Us pages. A focused message that identifies relevant experience, specific interests, and your intended position will help us respond efficiently.': '如有兴趣加入课题组，请先阅读“研究方向”和“加入我们”页面。请在邮件中说明相关经历、具体兴趣和申请职位，以便我们高效回复。',
  'Read application guidance': '阅读申请说明'
};

const pageTitles = {
  'index.html': ['Meng Gao Research Group | University of Macau', '高萌课题组 | 澳门大学'],
  'research.html': ['Research | Meng Gao Research Group', '研究方向 | 高萌课题组'],
  'people.html': ['People | Meng Gao Research Group', '团队成员 | 高萌课题组'],
  'publications.html': ['Publications | Meng Gao Research Group', '发表论文 | 高萌课题组'],
  'news.html': ['News | Meng Gao Research Group', '新闻动态 | 高萌课题组'],
  'join.html': ['Join Us | Meng Gao Research Group', '加入我们 | 高萌课题组'],
  'contact.html': ['Contact | Meng Gao Research Group', '联系我们 | 高萌课题组']
};

const languageSwitch = document.createElement('div');
languageSwitch.className = 'language-switch';
languageSwitch.setAttribute('role', 'group');
languageSwitch.setAttribute('aria-label', 'Language selection');
languageSwitch.innerHTML = '<button type="button" data-language="en">EN</button><span aria-hidden="true">/</span><button type="button" data-language="zh">中文</button>';

if (menuButton?.parentNode) {
  menuButton.parentNode.insertBefore(languageSwitch, menuButton);
}

const translatableNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest('.language-switch, script, style')) return NodeFilter.FILTER_REJECT;
    return translations[node.textContent.trim()] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  }
});

while (walker.nextNode()) {
  const node = walker.currentNode;
  const original = node.textContent;
  translatableNodes.push({
    node,
    english: original.trim(),
    prefix: original.match(/^\s*/)?.[0] || '',
    suffix: original.match(/\s*$/)?.[0] || ''
  });
}

function applyLanguage(language) {
  const selected = language === 'zh' ? 'zh' : 'en';
  translatableNodes.forEach(({ node, english, prefix, suffix }) => {
    node.textContent = `${prefix}${selected === 'zh' ? translations[english] : english}${suffix}`;
  });
  document.documentElement.lang = selected === 'zh' ? 'zh-Hans' : 'en';
  const page = location.pathname.split('/').pop() || 'index.html';
  if (pageTitles[page]) document.title = pageTitles[page][selected === 'zh' ? 1 : 0];
  languageSwitch.querySelectorAll('button').forEach((button) => {
    const active = button.dataset.language === selected;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  languageSwitch.setAttribute('aria-label', selected === 'zh' ? '语言选择' : 'Language selection');
  try { localStorage.setItem('site-language', selected); } catch {}
}

languageSwitch.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-language]');
  if (button) applyLanguage(button.dataset.language);
});

let preferredLanguage = 'en';
try { preferredLanguage = localStorage.getItem('site-language') || 'en'; } catch {}
applyLanguage(preferredLanguage);

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
