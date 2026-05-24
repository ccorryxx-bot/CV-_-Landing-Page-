// CV Data Configuration
var CONTACT = {
    phone: '09-788404048',
    email: 'zekyyyy2006@gmail.com',
    address: 'Yangon, Myanmar',
    github: 'github.com/yourusername',
    photo: 'https://i.ibb.co/Zz2rhXMr/IMG-20260418-173051-731.jpg',
    dob: 'October 5, 2006',
    langs: 'Burmese (Native) | English (Pre-Intermediate, B1)'
};

var DATA = {
    cvA: {
        name: 'KYAW GYI — YFM',
        role: 'Junior Developer & System Maintainer',
        objective: '',
        summary: '',
        section1Title: 'Technical Skills',
        section1: ['Web Dev: HTML5, CSS3, JavaScript (ES6)', 'Mobile: Android WebView, Java (Android Studio)', 'Systems: Cloudflare Workers, Git, Virtualization (VMOS)', 'Automation: Script Development, Server Monitoring'],
        section2Title: 'AI Tools Proficiency',
        section2rows: [['Tools', 'ChatGPT, Claude, Microsoft Copilot, Gemini'], ['Expertise', '']],
        section3Title: 'Work Experience',
        jobTitle: '',
        jobCompany: '',
        jobPeriod: '',
        jobBullets: ['', '', ''],
        section4Title: 'Soft Skills',
        section4: ['', '', '', ''],
        eduTitle: '',
        eduPlace: '',
        eduYear: '',
        eduNote: '',
        type: 'dev'
    },
    cvB: {
        name: 'KYAW GYI — YFM',
        role: 'Sales & Marketing Executive',
        objective: '',
        summary: '',
        section1Title: 'Key Strengths & People Skills',
        section1: ['', '', '', ''],
        section2Title: 'Sales & Marketing Skills',
        section2list: ['', '', '', ''],
        section3Title: 'Work Experience',
        jobTitle: '',
        jobCompany: '',
        jobPeriod: '',
        jobBullets: ['', '', ''],
        section4Title: 'Digital Tools',
        section4rows: [['Platforms', ''], ['Skills', '']],
        eduTitle: '',
        eduPlace: '',
        eduYear: '',
        eduNote: '',
        type: 'sales'
    },
    cvC: {
        name: 'KYAW GYI — YFM',
        role: 'Versatile Professional',
        objective: '',
        summary: '',
        section1Title: 'Core Skills',
        section1: ['', '', '', ''],
        section2Title: 'Work Experience',
        jobTitle: '',
        jobCompany: '',
        jobPeriod: '',
        jobBullets: ['', '', ''],
        section3Title: 'Additional Skills',
        section3: ['', '', '', ''],
        eduTitle: '',
        eduPlace: '',
        eduYear: '',
        eduNote: '',
        type: 'general'
    }
};

// Utility Functions
function escapeHtml(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatEditable(text, multiline) {
    var v = String(text == null ? '' : text);
    v = escapeHtml(v);
    if (multiline) {
        return v.replace(/\r\n|\r|\n/g, '<br>');
    }
    return v.replace(/\r\n|\r|\n/g, ' ');
}

function editableBlock(text, multiline, extraClass) {
    return '<div class="editable-field ' + (multiline ? 'multi-line' : 'single-line') + (extraClass ? ' ' + extraClass : '') + '" contenteditable="true">' + formatEditable(text, multiline) + '</div>';
}

function editableLi(text, multiline) {
    return '<li class="editable-field ' + (multiline ? 'multi-line' : 'single-line') + '" contenteditable="true">' + formatEditable(text, multiline) + '</li>';
}

function editableList(arr, multiline) {
    return (arr || []).map(function (item) {
        return editableLi(item, !!multiline);
    }).join('');
}

function editableRows(arr) {
    return (arr || []).map(function (r) {
        return '<div class="row"><span class="lbl">' + escapeHtml((r && r[0]) ? r[0] : '') + ':</span><div class="val editable-field multi-line" contenteditable="true">' + formatEditable((r && r[1]) ? r[1] : '', true) + '</div></div>';
    }).join('');
}

// Editable Field Management
function bindEditable(root) {
    if (!root) return;

    var fields = root.querySelectorAll('[contenteditable="true"]');

    fields.forEach(function (el) {
        el.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                if (!el.classList.contains('multi-line')) {
                    e.preventDefault();
                    return;
                }
            }
        });

        el.addEventListener('paste', function (e) {
            e.preventDefault();
            var text = (e.clipboardData || window.clipboardData).getData('text/plain') || '';
            if (el.classList.contains('multi-line')) {
                document.execCommand('insertText', false, text);
            } else {
                var clean = text.replace(/\r\n|\r|\n/g, ' ').replace(/\s+/g, ' ').trim();
                document.execCommand('insertText', false, clean);
            }
        });
    });
}

// Template Builders
function buildDev(d, hdr, foot) {
    return hdr
    +'<div class="sec"><div class="sec-title obj-title">Objective</div>'+editableBlock(d.objective, true)+'</div>'
    +'<div class="sec"><div class="sec-title">Professional Summary</div>'+editableBlock(d.summary, true)+'</div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section1Title)+'</div><ul>'+editableList(d.section1, true)+'</ul></div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section2Title)+'</div>'+editableRows(d.section2rows)+'</div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section3Title)+'</div>'
    +'<div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.jobTitle, false)+'</div>'
    +'<div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobCompany, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobPeriod, false)+'</span></div>'
    +'<ul>'+editableList(d.jobBullets, true)+'</ul></div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section4Title)+'</div><ul>'+editableList(d.section4, true)+'</ul></div>'
    +'<div class="sec"><div class="sec-title">Education</div>'
    +'<div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.eduTitle, false)+'</div>'
    +'<div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.eduPlace, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.eduYear, false)+'</span></div>'
    +'<div class="editable-field multi-line" contenteditable="true">'+formatEditable(d.eduNote, true)+'</div></div>'
    +foot;
}

function buildSales(d, hdr, foot) {
    return hdr
    +'<div class="sec"><div class="sec-title obj-title">Objective</div>'+editableBlock(d.objective, true)+'</div>'
    +'<div class="sec"><div class="sec-title">Professional Summary</div>'+editableBlock(d.summary, true)+'</div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section1Title)+'</div><ul>'+editableList(d.section1, true)+'</ul></div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section3Title)+'</div>'
    +'<div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.jobTitle, false)+'</div>'
    +'<div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobCompany, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobPeriod, false)+'</span></div>'
    +'<ul>'+editableList(d.jobBullets, true)+'</ul></div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section2Title)+'</div><ul>'+editableList(d.section2list, true)+'</ul></div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section4Title)+'</div>'+editableRows(d.section4rows)+'</div>'
    +'<div class="sec"><div class="sec-title">Education</div>'
    +'<div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.eduTitle, false)+'</div>'
    +'<div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.eduPlace, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.eduYear, false)+'</span></div>'
    +'<div class="editable-field multi-line" contenteditable="true">'+formatEditable(d.eduNote, true)+'</div></div>'
    +foot;
}

function buildGeneral(d, hdr, foot) {
    return hdr
    +'<div class="sec"><div class="sec-title obj-title">Objective</div>'+editableBlock(d.objective, true)+'</div>'
    +'<div class="sec"><div class="sec-title">Professional Summary</div>'+editableBlock(d.summary, true)+'</div>'
    +'<div class="grid2">'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section1Title)+'</div><ul>'+editableList(d.section1, true)+'</ul></div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section3Title)+'</div><ul>'+editableList(d.section3, true)+'</ul></div>'
    +'</div>'
    +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section2Title)+'</div>'
    +'<div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.jobTitle, false)+'</div>'
    +'<div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobCompany, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobPeriod, false)+'</span></div>'
    +'<ul>'+editableList(d.jobBullets, true)+'</ul></div>'
    +'<div class="sec"><div class="sec-title">Education</div>'
    +'<div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.eduTitle, false)+'</div>'
    +'<div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.eduPlace, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.eduYear, false)+'</span></div>'
    +'<div class="editable-field multi-line" contenteditable="true">'+formatEditable(d.eduNote, true)+'</div></div>'
    +foot;
}

function buildT1(d) {
    var c = CONTACT;
    var hdr = '<div class="cv-page"><div class="cv-header"><img src="'+c.photo+'" class="cv-photo" alt="Photo"><h1>'+escapeHtml(d.name)+'</h1><div class="cv-role">'+escapeHtml(d.role)+'</div><div class="cv-contact">'+escapeHtml(c.phone)+' | '+escapeHtml(c.email)+'<br>'+escapeHtml(c.address)+'</div></div>';
    var foot = '<div class="sec"><div class="sec-title">Personal Details</div><div class="row"><span class="lbl">Date of Birth:</span><span class="val">'+escapeHtml(c.dob)+'</span></div><div class="row"><span class="lbl">Languages:</span><span class="val">'+escapeHtml(c.langs)+'</span></div></div></div>';
    if (d.type==='sales') return buildSales(d, hdr, foot);
    if (d.type==='general') return buildGeneral(d, hdr, foot);
    return buildDev(d, hdr, foot);
}

function buildT2(d) {
    var c = CONTACT;
    var hdr = '<div class="cv-page"><div class="cv-header"><img src="'+c.photo+'" class="cv-photo" alt="Photo"><div class="header-text"><h1>'+escapeHtml(d.name)+'</h1><div class="cv-role">'+escapeHtml(d.role)+'</div><div class="cv-contact">'+escapeHtml(c.phone)+' · '+escapeHtml(c.email)+' · '+escapeHtml(c.address)+'</div></div></div>';
    var foot = '<div class="sec"><div class="sec-title">Details</div><div class="row"><span class="lbl">Date of Birth</span><span class="val">'+escapeHtml(c.dob)+'</span></div><div class="row"><span class="lbl">Languages</span><span class="val">'+escapeHtml(c.langs)+'</span></div></div></div>';
    if (d.type==='sales') return buildSales(d, hdr, foot);
    if (d.type==='general') return buildGeneral(d, hdr, foot);
    return buildDev(d, hdr, foot);
}

function buildT3(d) {
    var c = CONTACT;
    var hdr = '<div class="cv-page"><div class="cv-header"><img src="'+c.photo+'" class="cv-photo" alt="Photo"><div><h1>'+escapeHtml(d.name)+'</h1><div class="gold-line"></div><div class="cv-role">'+escapeHtml(d.role)+'</div><div class="cv-contact">'+escapeHtml(c.phone)+' · '+escapeHtml(c.email)+'<br>'+escapeHtml(c.address)+'</div></div></div>';
    var foot = '<div class="sec"><div class="sec-title">Personal Details</div><div class="row"><span class="lbl">Date of Birth:</span><span class="val">'+escapeHtml(c.dob)+'</span></div><div class="row"><span class="lbl">Languages:</span><span class="val">'+escapeHtml(c.langs)+'</span></div></div></div>';
    if (d.type==='sales') return buildSales(d, hdr, foot);
    if (d.type==='general') return buildGeneral(d, hdr, foot);
    return buildDev(d, hdr, foot);
}

function buildT4(d) {
    var c = CONTACT;
    var sidebar = '<div class="sidebar"><img src="'+c.photo+'" class="cv-photo" alt="Photo"><h1>'+escapeHtml(d.name)+'</h1><div class="cv-role">'+escapeHtml(d.role)+'</div>'
        +'<div><div class="sec-title">Contact</div><div class="contact-item">'+escapeHtml(c.phone)+'</div><div class="contact-item">'+escapeHtml(c.email)+'</div><div class="contact-item">'+escapeHtml(c.address)+'</div></div>'
        +'<div><div class="sec-title">Languages</div><p>'+escapeHtml(c.langs)+'</p></div>'
        +'<div><div class="sec-title">Personal</div><p>DOB: '+escapeHtml(c.dob)+'</p></div></div>';
    var hdr = '<div class="cv-page">'+sidebar+'<div class="main">';
    var foot = '<div class="sec"><div class="sec-title">Education</div><div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.eduTitle, false)+'</div><div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.eduPlace, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.eduYear, false)+'</span></div><div class="editable-field multi-line" contenteditable="true">'+formatEditable(d.eduNote, true)+'</div></div></div></div>';

    var mainContent;
    if (d.type==='sales') {
        mainContent = '<div class="sec"><div class="sec-title obj-title">Objective</div>'+editableBlock(d.objective, true)+'</div>'
            +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section1Title)+'</div><ul>'+editableList(d.section1, true)+'</ul></div>'
            +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section3Title)+'</div><div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.jobTitle, false)+'</div><div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobCompany, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobPeriod, false)+'</span></div><ul>'+editableList(d.jobBullets, true)+'</ul></div>'
            +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section2Title)+'</div><ul>'+editableList(d.section2list, true)+'</ul></div>';
    } else if (d.type==='general') {
        mainContent = '<div class="sec"><div class="sec-title obj-title">Objective</div>'+editableBlock(d.objective, true)+'</div>'
            +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section1Title)+'</div><ul>'+editableList(d.section1, true)+'</ul></div>'
            +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section2Title)+'</div><div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.jobTitle, false)+'</div><div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobCompany, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobPeriod, false)+'</span></div><ul>'+editableList(d.jobBullets, true)+'</ul></div>';
    } else {
        mainContent = '<div class="sec"><div class="sec-title obj-title">Objective</div>'+editableBlock(d.objective, true)+'</div>'
            +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section1Title)+'</div><ul>'+editableList(d.section1, true)+'</ul></div>'
            +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section2Title)+'</div>'+editableRows(d.section2rows)+'</div>'
            +'<div class="sec"><div class="sec-title">'+escapeHtml(d.section3Title)+'</div><div class="job-title editable-field single-line" contenteditable="true">'+formatEditable(d.jobTitle, false)+'</div><div class="job-meta"><span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobCompany, false)+'</span> | <span class="editable-inline editable-field single-line" contenteditable="true">'+formatEditable(d.jobPeriod, false)+'</span></div><ul>'+editableList(d.jobBullets, true)+'</ul></div>';
    }
    return hdr + mainContent + foot;
}

function buildT5(d) {
    var c = CONTACT;
    var hdr = '<div class="cv-page"><div class="cv-header"><img src="'+c.photo+'" class="cv-photo" alt="Photo"><div><h1>'+escapeHtml(d.name)+'</h1><div class="cv-role">'+escapeHtml(d.role)+'</div><div class="cv-contact">'+escapeHtml(c.phone)+' · '+escapeHtml(c.email)+' · '+escapeHtml(c.address)+'</div></div></div><div class="body">';
    var foot = '<div class="sec"><div class="sec-title">Personal Info</div><div class="row"><span class="lbl">Born:</span><span class="val">'+escapeHtml(c.dob)+'</span></div><div class="row"><span class="lbl">Languages:</span><span class="val">'+escapeHtml(c.langs)+'</span></div></div></div></div>';
    if (d.type==='sales') return buildSales(d, hdr, foot);
    if (d.type==='general') return buildGeneral(d, hdr, foot);
    return buildDev(d, hdr, foot);
}

// Page Management
function setPage(n) {
    document.getElementById('pg1-btn').classList.toggle('active', n===1);
    document.getElementById('pg2-btn').classList.toggle('active', n===2);
    document.getElementById('page1-wrap').style.display = (n===1 ? 'block' : 'none');
    document.getElementById('cv-wrap').style.display = (n===2 ? 'block' : 'none');
    if (n===1) bindEditable(document.getElementById('page1-wrap'));
}

var currentCV = 'cvA';
var currentTmpl = 1;

function selectCV(key) {
    currentCV = key;
    document.getElementById('cv-label').innerText = (key==='cvA'?'Developer':(key==='cvB'?'Sales':'General'));
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function backToStep1() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
}

function pickTemplate(n) {
    currentTmpl = n;
    renderCV();
    closeDashboard();
    setPage(2);
}

function renderCV() {
    var wrap = document.getElementById('cv-wrap');
    wrap.className = 'cv-wrap t' + currentTmpl;
    var root = document.getElementById('tmpl-root');
    var d = DATA[currentCV];
    if (currentTmpl===1) root.innerHTML = buildT1(d);
    else if (currentTmpl===2) root.innerHTML = buildT2(d);
    else if (currentTmpl===3) root.innerHTML = buildT3(d);
    else if (currentTmpl===4) root.innerHTML = buildT4(d);
    else if (currentTmpl===5) root.innerHTML = buildT5(d);
    bindEditable(root);
}

function openDashboard() { document.getElementById('dashboard-modal').classList.add('open'); }
function closeDashboard() { document.getElementById('dashboard-modal').classList.remove('open'); }

// Initialize
window.onload = function() {
    bindEditable(document.getElementById('page1-wrap'));
    renderCV();
};
