window.onload = function () {
    const bootingOverlay = document.getElementById('booting-overlay');
    const bootLines = [
        "[    0.000000] Linux version 6.6.8-arch1-1 (linux@archlinux) (gcc (GCC) 13.2.1)",
        "[    0.000000] Command line: BOOT_IMAGE=/vmlinuz-linux root=UUID=xxxx rw quiet",
        "[    0.012847] BIOS-provided physical RAM map:",
        "[    0.012849] BIOS-e820: [mem 0x00000000-0x0009fbff] usable",
        "[    0.012853] BIOS-e820: [mem 0x00100000-0xdffeffff] usable",
        "[    0.092341] NX (Execute Disable) protection: active",
        "[    0.115678] SMBIOS 3.4.0 present.",
        "[    0.238412] ACPI: Core revision 20230628",
        "[    0.241234] ACPI: AML tables loaded",
        "[    0.412934] Kernel command line processed",
        "[    0.558901] Memory: 16GB available",
        "[    0.771234] PCI: Using configuration type 1",
        "[    0.889123] HugeTLB: registered 2.00 MiB page size",
        "[    1.012345] ACPI: Interpreter enabled",
        "[    1.067890] ACPI: PM: (supports S0 S3 S4 S5)",
        "[    1.234567] PCI: Probing PCI hardware",
        "[    1.443214] EXT4-fs (sda1): mounted filesystem",
        "[    1.556789] VFS: Mounted root filesystem",
        "[    1.667234] random: crng init done",
        "[    1.778123] Freeing unused kernel memory",

        "",
        "systemd[1]: systemd 255 running in system mode",
        "systemd[1]: Detected virtualization kvm.",
        "systemd[1]: Detected architecture x86-64.",
        "systemd[1]: Hostname set to <localhost>.",

        "[  OK  ] Mounted /boot.",
        "[  OK  ] Reached target Local File Systems.",
        "[  OK  ] Started Rule-based Manager for Device Events.",
        "[  OK  ] Found device /dev/ttyS0.",
        "[  OK  ] Started D-Bus System Message Bus.",
        "[  OK  ] Started Network Manager.",
        "[  OK  ] Started Getty on tty1.",
        "[  OK  ] Reached target Login Prompts.",
        "[  OK  ] Started OpenSSH Daemon.",
        "[  OK  ] Reached target Multi-User System.",
        "[  OK  ] Reached target Graphical Interface.",

        "",
        "localhost login:"
    ];

    function getRandomBootDelay() {
        return Math.floor(Math.random() * 200);
    }

    let lineIndex = 0;

    function displayNextLine() {
        if (lineIndex < bootLines.length) {
            const line = document.createElement('div');
            line.textContent = bootLines[lineIndex];
            bootingOverlay.appendChild(line);

            bootingOverlay.scrollTop = bootingOverlay.scrollHeight;

            const delay = getRandomBootDelay();
            lineIndex++;

            setTimeout(displayNextLine, delay);
        } else {
            setTimeout(() => {
                bootingOverlay.style.display = 'none';
                document.querySelector('.desktop').classList.add('visible');
            }, 800);
        }
    }

    displayNextLine();
};


// Terminal functionality
const terminal = document.getElementById('terminal');
const terminalOutput = document.getElementById('terminal-output');
let typingInterval;

document.getElementById('terminal-icon').addEventListener('click', function () {
    terminal.style.display = 'block';
    terminal.classList.remove('fullscreen');
    setTimeout(() => {
        terminal.classList.add('open'); // Add the open class for animation
    }, 10);
    terminalOutput.textContent = '';
    clearInterval(typingInterval);
    simulateTyping();
    terminal.focus();
});

document.getElementById('close-terminal').addEventListener('click', function () {
    terminal.classList.remove('open');
    setTimeout(() => {
        terminal.style.display = 'none';
    }, 400);
    clearInterval(typingInterval);
    terminalOutput.textContent = '';
});

document.getElementById('minimize-terminal').addEventListener('click', function () {
    terminal.classList.remove('open');
    setTimeout(() => {
        terminal.style.display = 'none';
    }, 400);
});

document.getElementById('fullscreen-terminal').addEventListener('click', function () {
    terminal.classList.toggle('fullscreen');
});

// Allow Enter/Space when dock icons are focused (keyboard accessible)
document.querySelectorAll('.dock .icon').forEach(el => {
    el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            el.click();
        }
    });
});

function simulateTyping() {
    const text = `$ Information Technology Engineering student with hands-on experience on Linux commands, 
and practicing labs on TryHackMe.

$ Looking for opportunities in offensive security, red teaming, 
and security engineering.\n\n`;
    let index = 0;

    typingInterval = setInterval(() => {
        if (index < text.length) {
            terminalOutput.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 21);
}

// Date and time functionality
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    dateTimeElement.textContent = `${date} | ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Certifications functionality
const certificationsWindow = document.getElementById('certifications-window');
document.getElementById('folder-icon').addEventListener('click', function () {
    certificationsWindow.style.display = 'block';
    setTimeout(() => {
        certificationsWindow.classList.add('open'); // Add the open class for animation
    }, 10);
    certificationsWindow.focus();
});

document.getElementById('close-certifications').addEventListener('click', function () {
    certificationsWindow.classList.remove('open'); // Remove open class for closing animation
    setTimeout(() => {
        certificationsWindow.style.display = 'none';
    }, 400);
});

// Projects functionality
const projectsWindow = document.getElementById('projects-window');
document.getElementById('projects-icon').addEventListener('click', function () {
    projectsWindow.style.display = 'block';
    setTimeout(() => {
        projectsWindow.classList.add('open'); // Add the open class for animation
    }, 10);
    projectsWindow.focus();
});

document.getElementById('close-projects').addEventListener('click', function () {
    projectsWindow.classList.remove('open'); // Remove open class for closing animation
    setTimeout(() => {
        projectsWindow.style.display = 'none';
    }, 400);
});

// Experience functionality (NEW)
const experienceWindow = document.getElementById('experience-window');
document.getElementById('experience-icon').addEventListener('click', function () {
    experienceWindow.style.display = 'block';
    setTimeout(() => {
        experienceWindow.classList.add('open'); // Add the open class for animation
    }, 10);
    experienceWindow.focus();
});

document.getElementById('close-experience').addEventListener('click', function () {
    experienceWindow.classList.remove('open'); // Remove open class for closing animation
    setTimeout(() => {
        experienceWindow.style.display = 'none';
    }, 400);
});

// Open all links in new tabs and add rel for security
document.querySelectorAll('a').forEach(link => {
    if (!link.target) link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// Allow closing open windows with Escape key (non-invasive)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // close terminal if open
        if (terminal.classList.contains('open')) {
            document.getElementById('close-terminal').click();
            return;
        }
        // close experience window
        if (experienceWindow.classList.contains('open')) {
            document.getElementById('close-experience').click();
            return;
        }
        if (projectsWindow.classList.contains('open')) {
            document.getElementById('close-projects').click();
            return;
        }
        if (certificationsWindow.classList.contains('open')) {
            document.getElementById('close-certifications').click();
            return;
        }
    }
});

(function () {
    const dock = document.querySelector('.dock');
    if (!dock) return;
    const iconContainers = Array.from(dock.querySelectorAll('.icon'));
    const icons = iconContainers.map(c => c.querySelector('img'));
    const labels = iconContainers.map(c => c.querySelector('span'));
    const BASE_SIZE = 55;
    const MAX_SCALE = 2.0;
    const EFFECT_RANGE = 120;
    const LERP = 0.25;
    const Y_LIFT = 18;
    let targetSizes = new Array(icons.length).fill(BASE_SIZE);
    let currentSizes = new Array(icons.length).fill(BASE_SIZE);
    let raf = null;

    labels.forEach(label => {
        if (label) {
            label.style.opacity = '0';
            label.style.position = 'absolute';
            label.style.bottom = '135px';
            label.style.left = '50%';
            label.style.transform = 'translateX(-50%)';
            label.style.whiteSpace = 'nowrap';
            label.style.pointerEvents = 'none';
        }
    });
    
    icons.forEach(icon => {
        icon.style.width = BASE_SIZE + 'px';
        icon.style.height = BASE_SIZE + 'px';
    });

    function calculateWaveScale(mouseX, iconIndex) {
        const rect = iconContainers[iconIndex].getBoundingClientRect();
        const dockRect = dock.getBoundingClientRect();
        const iconCenter = (rect.left - dockRect.left) + rect.width / 2;
        const distance = Math.abs(mouseX - iconCenter);
        const influence = Math.max(0, 1 - Math.pow(distance / EFFECT_RANGE, 2));
        const scale = 1 + (MAX_SCALE - 1) * Math.pow(influence, 0.8);
        return scale;
    }

    function onMove(e) {
        const rect = dock.getBoundingClientRect();
        const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
        icons.forEach((icon, i) => {
            const scale = calculateWaveScale(x, i);
            targetSizes[i] = BASE_SIZE * scale;

            // Show label only on hovered icon
            if (labels[i]) 
            {
                labels[i].style.opacity = scale > 1.5 ? '1' : '0';
            }
        });
        
        if (!raf) raf = requestAnimationFrame(animate);
    }

    function onLeave() {
        targetSizes.fill(BASE_SIZE);
        // Hide all labels
        labels.forEach(label => {
            if (label) label.style.opacity = '0';
        });
        
        if (!raf) raf = requestAnimationFrame(animate);
    }

    function animate() {
        let active = false;
        icons.forEach((icon, i) => {
            const diff = targetSizes[i] - currentSizes[i];
            currentSizes[i] += diff * LERP;
            const scale = currentSizes[i] / BASE_SIZE;
            const lift = -(scale - 1) * Y_LIFT * Math.pow(scale - 1, 0.6);
            
            // Update width/height instead of scale to avoid overlap
            icon.style.width = currentSizes[i] + 'px';
            icon.style.height = currentSizes[i] + 'px';
            icon.style.transform = `translateY(${lift}px)`;

            if (Math.abs(diff) > 0.1) active = true;
        });

        if (active) {
            raf = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(raf);
            raf = null;
        }
    }

    dock.addEventListener('mousemove', onMove);
    dock.addEventListener('mouseleave', onLeave);
    
})();

(function () {
    const bar = document.querySelector('.icons');
    if (!bar) return;

    const iconContainers = Array.from(bar.querySelectorAll('.icon'));
    const icons = iconContainers.map(c => c.querySelector('img'));
    const labels = iconContainers.map(c => c.querySelector('span'));

    const BASE_SIZE = 55;
    const MAX_SCALE = 1.6;
    const EFFECT_RANGE = 120;
    const LERP = 0.25;
    const X_LIFT = 14;

    let targetSizes = new Array(icons.length).fill(BASE_SIZE);
    let currentSizes = new Array(icons.length).fill(BASE_SIZE);
    let raf = null;

    icons.forEach(icon => {
        icon.style.width = BASE_SIZE + 'px';
        icon.style.height = BASE_SIZE + 'px';
    });

    function calculateWaveScale(mouseY, index) {
        const rect = iconContainers[index].getBoundingClientRect();
        const barRect = bar.getBoundingClientRect();
        const iconCenter = (rect.top - barRect.top) + rect.height / 2;
        const distance = Math.abs(mouseY - iconCenter);

        const influence = Math.max(0, 1 - Math.pow(distance / EFFECT_RANGE, 2));
        return 1 + (MAX_SCALE - 1) * Math.pow(influence, 0.8);
    }

    function onMove(e) {
        const rect = bar.getBoundingClientRect();
        const y = e.clientY - rect.top;

        icons.forEach((icon, i) => {
            const scale = calculateWaveScale(y, i);
            targetSizes[i] = BASE_SIZE * scale;

            if (labels[i]) {
                labels[i].style.opacity = scale > 1.5 ? '1' : '0';
            }
        });

        if (!raf) raf = requestAnimationFrame(animate);
    }

    function onLeave() {
        targetSizes.fill(BASE_SIZE);
        labels.forEach(l => l && (l.style.opacity = '0'));
        if (!raf) raf = requestAnimationFrame(animate);
    }

    function animate() {
        let active = false;

        icons.forEach((icon, i) => {
            const diff = targetSizes[i] - currentSizes[i];
            currentSizes[i] += diff * LERP;

            const scale = currentSizes[i] / BASE_SIZE;
            const lift = (scale - 1) * X_LIFT;

            icon.style.width = currentSizes[i] + 'px';
            icon.style.height = currentSizes[i] + 'px';
            icon.style.transform = `translateX(${lift}px)`;
            if (labels[i]) {
                const labelScale = Math.min(1.1, 1 + (scale - 1) * 0.05);
                labels[i].style.transform = `translate(-50%, 8px) translateX(${lift}px) scale(${labelScale})`;
            }

            if (Math.abs(diff) > 0.1) active = true;
        });

        if (active) {
            raf = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(raf);
            raf = null;
        }
    }

    bar.addEventListener('mousemove', onMove);
    bar.addEventListener('mouseleave', onLeave);
})();
