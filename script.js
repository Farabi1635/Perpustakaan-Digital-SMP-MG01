// MASTER DATA BUKU dengan stok sesuai tabel
const masterBuku = [
    { judul: "THE EYE EXPLORER", stok: 3, prefix: "EYE", terpinjam: 0, daftarKode: [] },
    { judul: "MANGA FOR SUCCESS: TRANSFORMASI EFEKTIF", stok: 2, prefix: "MFS", terpinjam: 0, daftarKode: [] },
    { judul: "MANGA FOR SUCCESS: PEMIMPIN BIJAK", stok: 2, prefix: "MFP", terpinjam: 0, daftarKode: [] },
    { judul: "BANGGA MENJADI GURU", stok: 3, prefix: "GUR", terpinjam: 0, daftarKode: [] },
    { judul: "BARATAYUDA", stok: 3, prefix: "WAY", terpinjam: 0, daftarKode: [] },
    { judul: "BE HEARD: MENGUASAI SENI BERBICARA DI DEPAN UMUM", stok: 3, prefix: "SPK", terpinjam: 0, daftarKode: [] },
    { judul: "BIOGRAFIS PAHLAWAN NASIONAL: DEWI SARTIKA", stok: 3, prefix: "DWS", terpinjam: 0, daftarKode: [] },
    { judul: "BIOGRAFIS PAHLAWAN NASIONAL: WAHID HASYIM", stok: 3, prefix: "WHS", terpinjam: 0, daftarKode: [] },
    { judul: "BUKU POSTER: ALAM SEMESTA", stok: 3, prefix: "PAL", terpinjam: 0, daftarKode: [] },
    { judul: "BUKU POSTER: PETA DUNIA", stok: 3, prefix: "PPD", terpinjam: 0, daftarKode: [] },
    { judul: "BUKU POSTER: TUBUH MANUSIA", stok: 3, prefix: "PTM", terpinjam: 0, daftarKode: [] },
    { judul: "BUNGA MATAHARI", stok: 3, prefix: "BUN", terpinjam: 0, daftarKode: [] },
    { judul: "CERITA RAKYAT PAPUA BARAT DAYA", stok: 4, prefix: "CPB", terpinjam: 0, daftarKode: [] },
    { judul: "CERITA RAKYAT PORT NUMBAY KOTA JAYAPURA", stok: 4, prefix: "CPN", terpinjam: 0, daftarKode: [] },
    { judul: "DOLAN NING KOTA UDANG YUH", stok: 4, prefix: "DOL", terpinjam: 0, daftarKode: [] },
    { judul: "APA YANG DILAKUKAN ASTRONAUT", stok: 3, prefix: "AST", terpinjam: 0, daftarKode: [] },
    { judul: "APA YANG DILAKUKAN ILMUWAN", stok: 4, prefix: "ILM", terpinjam: 0, daftarKode: [] },
    { judul: "APA YANG DILAKUKAN DOKTER", stok: 4, prefix: "DOK", terpinjam: 0, daftarKode: [] },
    { judul: "MATEMATIKA UNTUK PEMULA", stok: 3, prefix: "MUP", terpinjam: 0, daftarKode: [] },
    { judul: "FISIKA UNTUK PEMULA", stok: 3, prefix: "FIP", terpinjam: 0, daftarKode: [] },
    { judul: "TELADAN PANCASILA PRESIDEN INDONESIA", stok: 3, prefix: "PANC", terpinjam: 0, daftarKode: [] },
    { judul: "UANG UNTUK PEMULA", stok: 4, prefix: "UANG", terpinjam: 0, daftarKode: [] },
    { judul: "WIRAUSAHA UNTUK PEMULA", stok: 3, prefix: "WIR", terpinjam: 0, daftarKode: [] },
    { judul: "GEOGRAFI UNTUK PEMULA", stok: 3, prefix: "GEO", terpinjam: 0, daftarKode: [] },
    { judul: "FAKTA YANG SALAH TENTANG DINOSAURUS", stok: 4, prefix: "DINO", terpinjam: 0, daftarKode: [] },
    { judul: "PANDUAN MENJALANI HIDUP UNTUK REMAJA 2: AKU & SEKITAR", stok: 3, prefix: "REM2", terpinjam: 0, daftarKode: [] },
    { judul: "PANDUAN MENJALANI HIDUP UNTUK REMAJA 1: AKU & MEREKA", stok: 3, prefix: "REM1", terpinjam: 0, daftarKode: [] },
    { judul: "FAKTA YANG SALAH TENTANG HIU", stok: 3, prefix: "HIU", terpinjam: 0, daftarKode: [] },
    { judul: "CINTA AGAMA BELA NEGARA", stok: 3, prefix: "CAB", terpinjam: 0, daftarKode: [] },
    { judul: "AYO GERAK BIKIN DAMPAK", stok: 3, prefix: "AGB", terpinjam: 0, daftarKode: [] },
    { judul: "PAKAI OTAK BUKAN OTOT", stok: 3, prefix: "POB", terpinjam: 0, daftarKode: [] },
    { judul: "PELIHARA AGAMA LESTARIKA BUDAYA", stok: 3, prefix: "PALB", terpinjam: 0, daftarKode: [] },
    { judul: "PANDUAN GEN Z MENDUNIA", stok: 3, prefix: "GENZ", terpinjam: 0, daftarKode: [] },
    { judul: "FAKTA YANG SALAH TENTANG HEWAN KECIL", stok: 3, prefix: "HEW", terpinjam: 0, daftarKode: [] },
    { judul: "APIK BERTEMU CEMPE (EDISI D'KANDANG AMAZING FARM)", stok: 1, prefix: "APIK", terpinjam: 0, daftarKode: [] }
];

// Inisialisasi daftar kode per buku berdasarkan stok
function inisialisasiDaftarKode() {
    for (let i = 0; i < masterBuku.length; i++) {
        const buku = masterBuku[i];
        buku.daftarKode = [];
        for (let j = 1; j <= buku.stok; j++) {
            const nomor = j < 10 ? '0' + j : '' + j;
            buku.daftarKode.push(buku.prefix + '-' + nomor);
        }
        buku.terpinjam = 0;
    }
}
inisialisasiDaftarKode();

// Data peminjaman
let daftarPeminjaman = [];

// ==================== FUNGSI BANTU ====================
function formatTanggal(tanggalISO) {
    if (!tanggalISO) return '-';
    var parts = tanggalISO.split('-');
    if (parts.length !== 3) return tanggalISO;
    return parts[2] + '/' + parts[1] + '/' + parts[0];
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function showNotification(pesan, isError) {
    isError = isError || false;
    var notif = document.createElement('div');
    notif.className = 'notif-toast';
    var icon = isError ? 'fa-exclamation-triangle' : 'fa-check-circle';
    notif.innerHTML = '<i class="fas ' + icon + '"></i> ' + pesan;
    notif.style.borderLeftColor = isError ? '#EF4444' : '#1E3A8A';
    document.body.appendChild(notif);
    setTimeout(function() {
        if (notif && notif.remove) notif.remove();
    }, 2500);
}

// ==================== MANAJEMEN STOK DAN KODE ====================
function updateStokBuku() {
    for (var i = 0; i < masterBuku.length; i++) {
        var buku = masterBuku[i];
        var terpinjam = 0;
        for (var j = 0; j < daftarPeminjaman.length; j++) {
            if (daftarPeminjaman[j].judulBuku === buku.judul && daftarPeminjaman[j].status === 'dipinjam') {
                terpinjam++;
            }
        }
        buku.terpinjam = terpinjam;
    }
}

function getStokTersedia(judulBuku) {
    for (var i = 0; i < masterBuku.length; i++) {
        if (masterBuku[i].judul === judulBuku) {
            return masterBuku[i].stok - masterBuku[i].terpinjam;
        }
    }
    return 0;
}

function getAllKodeTersedia(judulBuku) {
    for (var i = 0; i < masterBuku.length; i++) {
        if (masterBuku[i].judul === judulBuku) {
            var buku = masterBuku[i];
            var kodeDipinjam = [];
            for (var j = 0; j < daftarPeminjaman.length; j++) {
                if (daftarPeminjaman[j].judulBuku === judulBuku && daftarPeminjaman[j].status === 'dipinjam') {
                    kodeDipinjam.push(daftarPeminjaman[j].kodeBuku);
                }
            }
            var tersedia = [];
            for (var k = 0; k < buku.daftarKode.length; k++) {
                var ada = false;
                for (var l = 0; l < kodeDipinjam.length; l++) {
                    if (buku.daftarKode[k] === kodeDipinjam[l]) {
                        ada = true;
                        break;
                    }
                }
                if (!ada) {
                    tersedia.push(buku.daftarKode[k]);
                }
            }
            return tersedia;
        }
    }
    return [];
}

function getKodeTersediaPertama(judulBuku) {
    var semua = getAllKodeTersedia(judulBuku);
    return semua.length > 0 ? semua[0] : null;
}

function getInfoBukuByKode(kode) {
    for (var i = 0; i < masterBuku.length; i++) {
        var buku = masterBuku[i];
        for (var j = 0; j < buku.daftarKode.length; j++) {
            if (buku.daftarKode[j] === kode) {
                return { judul: buku.judul, prefix: buku.prefix, stok: buku.stok };
            }
        }
    }
    return null;
}

function isBukuTersedia(judulBuku) {
    return getStokTersedia(judulBuku) > 0;
}

function isKodeBukuValid(kode, judulBuku) {
    for (var i = 0; i < masterBuku.length; i++) {
        if (masterBuku[i].judul === judulBuku) {
            for (var j = 0; j < masterBuku[i].daftarKode.length; j++) {
                if (masterBuku[i].daftarKode[j] === kode) {
                    return true;
                }
            }
        }
    }
    return false;
}

function isKodeSedangDipinjam(kode) {
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        if (daftarPeminjaman[i].kodeBuku === kode && daftarPeminjaman[i].status === 'dipinjam') {
            return true;
        }
    }
    return false;
}

// ==================== LOAD & SAVE ====================
function loadDataFromStorage() {
    var stored = localStorage.getItem('perpustakaan_data');
    if (stored) {
        daftarPeminjaman = JSON.parse(stored);
    } else {
        daftarPeminjaman = [];
    }
    updateStokBuku();
    renderAll();
}

function saveToStorage() {
    localStorage.setItem('perpustakaan_data', JSON.stringify(daftarPeminjaman));
    updateStokBuku();
    renderAll();
}

// ==================== RENDER SEMUA ====================
function renderAll() {
    renderTabelAktif();
    renderRiwayat();
    updateHeaderStats();
    updateStatistikLengkap();
    renderKoleksiBuku();
    populateJudulBuku();
}

function updateHeaderStats() {
    var total = daftarPeminjaman.length;
    var aktif = 0;
    var selesai = 0;
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        if (daftarPeminjaman[i].status === 'dipinjam') aktif++;
        else if (daftarPeminjaman[i].status === 'dikembalikan') selesai++;
    }
    var elTotal = document.getElementById('headerTotal');
    var elAktif = document.getElementById('headerAktif');
    var elSelesai = document.getElementById('headerSelesai');
    if (elTotal) elTotal.innerText = total;
    if (elAktif) elAktif.innerText = aktif;
    if (elSelesai) elSelesai.innerText = selesai;
}

function renderTabelAktif() {
    var tbody = document.getElementById('tbodyPeminjaman');
    if (!tbody) return;

    var aktif = [];
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        if (daftarPeminjaman[i].status === 'dipinjam') {
            aktif.push(daftarPeminjaman[i]);
        }
    }

    var searchInput = document.getElementById('searchAktif');
    var keyword = searchInput ? searchInput.value.toLowerCase() : '';

    var filtered = [];
    for (var i = 0; i < aktif.length; i++) {
        var item = aktif[i];
        if (item.namaSiswa.toLowerCase().indexOf(keyword) !== -1 ||
            item.kodeBuku.toLowerCase().indexOf(keyword) !== -1 ||
            item.judulBuku.toLowerCase().indexOf(keyword) !== -1) {
            filtered.push(item);
        }
    }

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr class="empty-row"><td colspan="7"><i class="fas fa-inbox"></i><br>' + (keyword ? 'Tidak ditemukan' : 'Belum ada peminjaman aktif') + '<\/td><\/tr>';
        return;
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var p = filtered[i];
        html += '<tr>' +
            '<td><strong>' + escapeHtml(p.kodeBuku) + '<\/strong><\/td>' +
            '<td>' + escapeHtml(p.namaSiswa) + '<\/td>' +
            '<td>' + escapeHtml(p.kelas) + '<\/td>' +
            '<td>' + escapeHtml(p.judulBuku) + '<\/td>' +
            '<td>' + formatTanggal(p.tglPinjam) + '<\/td>' +
            '<td>' + formatTanggal(p.tglKembali) + '<\/td>' +
            '<td><span class="status-badge"><i class="fas fa-book"></i> Dipinjam<\/span><\/td>' +
            '<\/tr>';
    }
    tbody.innerHTML = html;
}

function renderRiwayat() {
    var tbody = document.getElementById('tbodyRiwayat');
    if (!tbody) return;

    var searchInput = document.getElementById('searchRiwayat');
    var statusFilter = document.getElementById('filterStatusRiwayat');
    var keyword = searchInput ? searchInput.value.toLowerCase() : '';
    var filterValue = statusFilter ? statusFilter.value : 'semua';

    var filtered = [];
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        filtered.push(daftarPeminjaman[i]);
    }

    if (keyword) {
        var temp = [];
        for (var i = 0; i < filtered.length; i++) {
            var item = filtered[i];
            if ((item.namaSiswa && item.namaSiswa.toLowerCase().indexOf(keyword) !== -1) ||
                (item.kodeBuku && item.kodeBuku.toLowerCase().indexOf(keyword) !== -1) ||
                (item.judulBuku && item.judulBuku.toLowerCase().indexOf(keyword) !== -1) ||
                (item.kelas && item.kelas.toLowerCase().indexOf(keyword) !== -1)) {
                temp.push(item);
            }
        }
        filtered = temp;
    }

    if (filterValue !== 'semua') {
        var temp = [];
        for (var i = 0; i < filtered.length; i++) {
            if (filtered[i].status === filterValue) {
                temp.push(filtered[i]);
            }
        }
        filtered = temp;
    }

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr class="empty-row"><td colspan="8"><i class="fas fa-inbox"></i><br>' + (keyword ? 'Tidak ditemukan' : 'Belum ada data') + '<\/td><\/tr>';
        return;
    }

    filtered.sort(function(a, b) { return b.id - a.id; });

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var p = filtered[i];
        var statusBadge = p.status === 'dipinjam' ?
            '<span class="status-badge"><i class="fas fa-book"></i> Dipinjam</span>' :
            '<span class="status-badge returned"><i class="fas fa-check-circle"></i> Dikembalikan</span>';
        html += '<tr>' +
            '<td><strong>' + escapeHtml(p.kodeBuku) + '<\/strong><\/td>' +
            '<td>' + escapeHtml(p.namaSiswa) + '<\/td>' +
            '<td>' + escapeHtml(p.kelas) + '<\/td>' +
            '<td>' + escapeHtml(p.judulBuku) + '<\/td>' +
            '<td>' + formatTanggal(p.tglPinjam) + '<\/td>' +
            '<td>' + formatTanggal(p.tglKembali) + '<\/td>' +
            '<td>' + (p.tglDikembalikan ? formatTanggal(p.tglDikembalikan) : '-') + '<\/td>' +
            '<td>' + statusBadge + '<\/td>' +
            '<\/tr>';
    }
    tbody.innerHTML = html;
}

function updateStatistikLengkap() {
    var total = daftarPeminjaman.length;
    var aktif = 0;
    var selesai = 0;
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        if (daftarPeminjaman[i].status === 'dipinjam') aktif++;
        else if (daftarPeminjaman[i].status === 'dikembalikan') selesai++;
    }

    var statTotal = document.getElementById('statTotal');
    var statAktif = document.getElementById('statAktif');
    var statSelesai = document.getElementById('statSelesai');
    if (statTotal) statTotal.innerText = total;
    if (statAktif) statAktif.innerText = aktif;
    if (statSelesai) statSelesai.innerText = selesai;

    // Statistik per kelas
    var kelasCount = {};
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        var kelas = daftarPeminjaman[i].kelas;
        if (kelas) {
            if (kelasCount[kelas] === undefined) kelasCount[kelas] = 0;
            kelasCount[kelas]++;
        }
    }

    var statsKelasDiv = document.getElementById('statsKelas');
    if (statsKelasDiv) {
        statsKelasDiv.innerHTML = '';
        var kelasKeys = Object.keys(kelasCount);
        if (kelasKeys.length === 0) {
            statsKelasDiv.innerHTML = '<p style="color:gray; text-align:center;">Belum ada data</p>';
        } else {
            kelasKeys.sort();
            for (var i = 0; i < kelasKeys.length; i++) {
                var kelas = kelasKeys[i];
                statsKelasDiv.innerHTML += '<div class="stat-kelas-item"><span>' + escapeHtml(kelas) + '</span><strong>' + kelasCount[kelas] + ' peminjaman</strong></div>';
            }
        }
    }

    // Top Buku
    var bukuCount = {};
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        var judul = daftarPeminjaman[i].judulBuku;
        if (judul) {
            if (bukuCount[judul] === undefined) bukuCount[judul] = 0;
            bukuCount[judul]++;
        }
    }

    var topBukuDiv = document.getElementById('topBuku');
    if (topBukuDiv) {
        topBukuDiv.innerHTML = '';
        var bukuEntries = Object.entries(bukuCount);
        if (bukuEntries.length === 0) {
            topBukuDiv.innerHTML = '<p style="color:gray; text-align:center;">Belum ada data</p>';
        } else {
            bukuEntries.sort(function(a, b) { return b[1] - a[1]; });
            var rankClasses = ['gold', 'silver', 'bronze', '', ''];
            for (var i = 0; i < Math.min(5, bukuEntries.length); i++) {
                topBukuDiv.innerHTML += '<div class="rank-item"><span class="rank-num ' + (rankClasses[i] || '') + '">' + (i + 1) + '</span><span>' + escapeHtml(bukuEntries[i][0]) + '</span><strong>' + bukuEntries[i][1] + 'x</strong></div>';
            }
        }
    }

    // Top Siswa
    var siswaCount = {};
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        var nama = daftarPeminjaman[i].namaSiswa;
        var kelas = daftarPeminjaman[i].kelas || '-';
        if (nama) {
            var key = nama + ' (' + kelas + ')';
            if (siswaCount[key] === undefined) siswaCount[key] = 0;
            siswaCount[key]++;
        }
    }

    var topSiswaDiv = document.getElementById('topSiswa');
    if (topSiswaDiv) {
        topSiswaDiv.innerHTML = '';
        var siswaEntries = Object.entries(siswaCount);
        if (siswaEntries.length === 0) {
            topSiswaDiv.innerHTML = '<p style="color:gray; text-align:center;">Belum ada data</p>';
        } else {
            siswaEntries.sort(function(a, b) { return b[1] - a[1]; });
            var rankClassesSiswa = ['gold', 'silver', 'bronze', '', ''];
            for (var i = 0; i < Math.min(5, siswaEntries.length); i++) {
                topSiswaDiv.innerHTML += '<div class="rank-item"><span class="rank-num ' + (rankClassesSiswa[i] || '') + '">' + (i + 1) + '</span><span>' + escapeHtml(siswaEntries[i][0]) + '</span><strong>' + siswaEntries[i][1] + 'x</strong></div>';
            }
        }
    }
}

function renderKoleksiBuku() {
    var grid = document.getElementById('bukuGrid');
    if (!grid) return;

    var searchInput = document.getElementById('searchBuku');
    var keyword = searchInput ? searchInput.value.toLowerCase() : '';

    var filtered = [];
    for (var i = 0; i < masterBuku.length; i++) {
        filtered.push(masterBuku[i]);
    }

    if (keyword) {
        var temp = [];
        for (var i = 0; i < filtered.length; i++) {
            if (filtered[i].judul.toLowerCase().indexOf(keyword) !== -1 ||
                filtered[i].prefix.toLowerCase().indexOf(keyword) !== -1) {
                temp.push(filtered[i]);
            }
        }
        filtered = temp;
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:gray;padding:40px;"><i class="fas fa-search"></i><br>Buku tidak ditemukan</p>';
        return;
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        var buku = filtered[i];
        var tersedia = getStokTersedia(buku.judul);
        var kodeTersedia = getAllKodeTersedia(buku.judul);

        var statusClass = '';
        var statusText = '';
        var statusIcon = '';

        if (tersedia <= 0) {
            statusClass = 'status-habis';
            statusText = 'HABIS';
            statusIcon = 'fa-times-circle';
        } else if (tersedia <= 2) {
            statusClass = 'status-sedikit';
            statusText = 'Sisa ' + tersedia;
            statusIcon = 'fa-exclamation-triangle';
        } else {
            statusClass = 'status-tersedia';
            statusText = 'Tersedia ' + tersedia;
            statusIcon = 'fa-check-circle';
        }

        var disabledClass = tersedia <= 0 ? 'disabled' : '';
        var onclickAttr = tersedia > 0 ? 'onclick="pilihBuku(\'' + escapeHtml(buku.judul).replace(/'/g, "\\'") + '\')"' : '';

        html += '<div class="buku-item ' + disabledClass + '" ' + onclickAttr + '>' +
            '<div class="buku-book-icon"><i class="fas fa-book"></i></div>' +
            '<div class="buku-info">' +
            '<div class="judul">' + escapeHtml(buku.judul) + '</div>' +
            '<div class="kode-info">' +
            '<span class="kode-label">Kode:</span>' +
            '<span class="kode-values">' + (kodeTersedia.length > 0 ? kodeTersedia.join(', ') : 'Tidak ada') + '</span>' +
            '</div>' +
            '<div class="detail-stok">' +
            '<span class="stok-badge ' + statusClass + '"><i class="fas ' + statusIcon + '"></i> ' + statusText + '</span>' +
            '<span class="stok-total">Total: ' + buku.stok + ' eks</span>' +
            '</div>' +
            '</div>' +
            '<div class="buku-arrow">' + (tersedia > 0 ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-lock"></i>') + '</div>' +
            '</div>';
    }
    grid.innerHTML = html;
}

function populateJudulBuku() {
    var judulSelect = document.getElementById('judulBuku');
    if (!judulSelect) return;

    judulSelect.innerHTML = '<option value="">Pilih Judul Buku</option>';

    var sorted = [];
    for (var i = 0; i < masterBuku.length; i++) {
        sorted.push(masterBuku[i]);
    }
    sorted.sort(function(a, b) {
        if (a.judul < b.judul) return -1;
        if (a.judul > b.judul) return 1;
        return 0;
    });

    for (var i = 0; i < sorted.length; i++) {
        var buku = sorted[i];
        var tersedia = getStokTersedia(buku.judul);
        var kodeTersedia = getAllKodeTersedia(buku.judul);
        var option = document.createElement('option');
        option.value = buku.judul;
        option.textContent = buku.judul + ' [' + (kodeTersedia.length > 0 ? kodeTersedia.join(',') : 'HABIS') + '] (Tersedia: ' + tersedia + '/' + buku.stok + ')';
        if (tersedia <= 0) {
            option.disabled = true;
        }
        judulSelect.appendChild(option);
    }
}

// Fungsi global untuk pilih buku
window.pilihBuku = function(judul) {
    var tersedia = getStokTersedia(judul);
    if (tersedia <= 0) {
        showNotification('Maaf, buku "' + judul + '" sedang habis!', true);
        return;
    }

    var judulSelect = document.getElementById('judulBuku');
    var kodeInput = document.getElementById('kodeBuku');
    var kodeTersedia = getAllKodeTersedia(judul);

    if (judulSelect) judulSelect.value = judul;
    if (kodeInput && kodeTersedia.length > 0) {
        kodeInput.value = kodeTersedia[0];
        kodeInput.style.borderColor = '#10B981';
        kodeInput.style.backgroundColor = '#F0FDF4';
        setTimeout(function() {
            if (kodeInput) {
                kodeInput.style.borderColor = '';
                kodeInput.style.backgroundColor = '';
            }
        }, 500);
    }
    showTab('peminjaman');
    showNotification('Buku "' + judul + '" dipilih. Kode tersedia: ' + kodeTersedia.join(', '), false);
};

// ==================== PROSES PEMINJAMAN ====================
function prosesPeminjaman(e) {
    e.preventDefault();

    var kodeBuku = document.getElementById('kodeBuku').value.trim().toUpperCase();
    var namaSiswa = document.getElementById('namaSiswa').value.trim();
    var kelas = document.getElementById('kelas').value;
    var judulBuku = document.getElementById('judulBuku').value;
    var tglPinjam = document.getElementById('tglPinjam').value;
    var tglKembali = document.getElementById('tglKembali').value;

    if (!kodeBuku || !namaSiswa || !kelas || !judulBuku || !tglPinjam || !tglKembali) {
        showNotification('Semua field harus diisi!', true);
        return;
    }

    // Validasi kode buku
    if (!isKodeBukuValid(kodeBuku, judulBuku)) {
        showNotification('Kode buku tidak valid untuk judul ini!', true);
        return;
    }

    // Cek apakah kode sedang dipinjam
    if (isKodeSedangDipinjam(kodeBuku)) {
        showNotification('Buku dengan kode "' + kodeBuku + '" sedang dipinjam!', true);
        return;
    }

    // Validasi tanggal
    if (new Date(tglKembali) < new Date(tglPinjam)) {
        showNotification('Tanggal kembali harus setelah tanggal pinjam!', true);
        return;
    }

    var peminjamanBaru = {
        id: Date.now(),
        kodeBuku: kodeBuku,
        namaSiswa: namaSiswa,
        kelas: kelas,
        judulBuku: judulBuku,
        tglPinjam: tglPinjam,
        tglKembali: tglKembali,
        status: 'dipinjam'
    };

    daftarPeminjaman.push(peminjamanBaru);
    saveToStorage();

    // Reset form
    document.getElementById('formPeminjaman').reset();
    setDefaultTanggal();
    document.getElementById('judulBuku').value = '';
    document.getElementById('kodeBuku').value = '';

    showNotification('✅ Buku "' + judulBuku + '" (' + kodeBuku + ') berhasil dipinjam', false);
}

// ==================== PROSES PENGEMBALIAN ====================
function prosesPengembalian() {
    var kodeBuku = document.getElementById('returnKodeBuku').value.trim().toUpperCase();
    var msgDiv = document.getElementById('returnMessage');

    if (!kodeBuku) {
        if (msgDiv) {
            msgDiv.innerHTML = '<span style="color:#D97706;">⚠️ Masukkan kode buku yang akan dikembalikan!</span>';
            setTimeout(function() { if (msgDiv) msgDiv.innerHTML = ''; }, 2000);
        }
        showNotification('Masukkan kode buku terlebih dahulu!', true);
        return;
    }

    // Cari peminjaman dengan kode tersebut
    var index = -1;
    for (var i = 0; i < daftarPeminjaman.length; i++) {
        if (daftarPeminjaman[i].kodeBuku === kodeBuku && daftarPeminjaman[i].status === 'dipinjam') {
            index = i;
            break;
        }
    }

    if (index === -1) {
        if (msgDiv) {
            msgDiv.innerHTML = '<span style="color:#EF4444;">❌ Buku dengan kode "' + kodeBuku + '" tidak ditemukan atau sudah dikembalikan!</span>';
            setTimeout(function() { if (msgDiv) msgDiv.innerHTML = ''; }, 2000);
        }
        showNotification('Buku dengan kode "' + kodeBuku + '" tidak ditemukan!', true);
        return;
    }

    var bukuDikembalikan = daftarPeminjaman[index];
    daftarPeminjaman[index].status = 'dikembalikan';
    daftarPeminjaman[index].tglDikembalikan = new Date().toISOString().split('T')[0];

    saveToStorage();

    document.getElementById('returnKodeBuku').value = '';
    if (msgDiv) {
        msgDiv.innerHTML = '<span style="color:#10B981;">✅ Buku "' + bukuDikembalikan.judulBuku + '" (' + kodeBuku + ') berhasil dikembalikan!</span>';
        setTimeout(function() { if (msgDiv) msgDiv.innerHTML = ''; }, 2000);
    }

    showNotification('📚 Buku "' + bukuDikembalikan.judulBuku + '" (' + kodeBuku + ') telah dikembalikan', false);
}

// ==================== AUTO FILL & DETECT ====================
function autoFillKodeBuku() {
    var judulSelect = document.getElementById('judulBuku');
    var kodeInput = document.getElementById('kodeBuku');

    if (judulSelect && kodeInput) {
        var selectedJudul = judulSelect.value;
        if (selectedJudul) {
            var kodeTersedia = getAllKodeTersedia(selectedJudul);
            if (kodeTersedia.length > 0) {
                kodeInput.value = kodeTersedia[0];
                kodeInput.style.borderColor = '#10B981';
                kodeInput.style.backgroundColor = '#F0FDF4';
                setTimeout(function() {
                    if (kodeInput) {
                        kodeInput.style.borderColor = '';
                        kodeInput.style.backgroundColor = '';
                    }
                }, 500);
            } else {
                kodeInput.value = '';
                showNotification('Buku "' + selectedJudul + '" sedang habis!', true);
            }
        } else {
            kodeInput.value = '';
        }
    }
}

function autoDetectKode() {
    var kodeInput = document.getElementById('returnKodeBuku');
    if (!kodeInput) return;

    var kode = kodeInput.value.trim().toUpperCase();
    if (kode) {
        var info = getInfoBukuByKode(kode);
        var msgDiv = document.getElementById('returnMessage');
        if (info && msgDiv) {
            msgDiv.innerHTML = '<span style="color:#10B981;"><i class="fas fa-check-circle"></i> Ditemukan: ' + info.judul + '</span>';
            setTimeout(function() {
                if (msgDiv && msgDiv.innerHTML && msgDiv.innerHTML.indexOf('Ditemukan') !== -1) {
                    msgDiv.innerHTML = '';
                }
            }, 2000);
        }
    }
}

// ==================== UTILITY ====================
function exportToCSV() {
    if (daftarPeminjaman.length === 0) {
        showNotification('Tidak ada data untuk diexport', true);
        return;
    }

    var csv = "\uFEFFKode Buku,Nama Siswa,Kelas,Judul Buku,Tgl Pinjam,Tgl Jatuh Tempo,Tgl Dikembalikan,Status\n";

    for (var i = 0; i < daftarPeminjaman.length; i++) {
        var item = daftarPeminjaman[i];
        var status = item.status === 'dipinjam' ? 'Dipinjam' : 'Dikembalikan';
        csv += '"' + item.kodeBuku + '","' + item.namaSiswa + '","' + item.kelas + '","' + item.judulBuku + '","' + item.tglPinjam + '","' + item.tglKembali + '","' + (item.tglDikembalikan || '-') + '","' + status + '"\n';
    }

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', 'riwayat_perpustakaan_' + new Date().toISOString().split('T')[0] + '.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showNotification('Data berhasil diexport!', false);
}

function clearAllData() {
    if (confirm('⚠️ Yakin ingin menghapus SEMUA data peminjaman? Tindakan ini tidak bisa dibatalkan!')) {
        daftarPeminjaman = [];
        saveToStorage();
        showNotification('Semua data telah dihapus', false);
        showTab('riwayat');
    }
}

function setDefaultTanggal() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var defaultPinjam = yyyy + '-' + mm + '-' + dd;

    var nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    var yyyy2 = nextWeek.getFullYear();
    var mm2 = String(nextWeek.getMonth() + 1).padStart(2, '0');
    var dd2 = String(nextWeek.getDate()).padStart(2, '0');
    var defaultKembali = yyyy2 + '-' + mm2 + '-' + dd2;

    var tglPinjamInput = document.getElementById('tglPinjam');
    var tglKembaliInput = document.getElementById('tglKembali');

    if (tglPinjamInput && !tglPinjamInput.value) {
        tglPinjamInput.value = defaultPinjam;
    }
    if (tglKembaliInput && !tglKembaliInput.value) {
        tglKembaliInput.value = defaultKembali;
    }
}

function filterAktif() {
    renderTabelAktif();
}

function filterRiwayat() {
    renderRiwayat();
}

// ==================== SHOW TAB ====================
function showTab(tabName) {
    var tabIds = {
        peminjaman: 'tabPeminjaman',
        riwayat: 'tabRiwayat',
        statistik: 'tabStatistik',
        buku: 'tabBuku'
    };

    // Hide all tabs
    var tabs = ['peminjaman', 'riwayat', 'statistik', 'buku'];
    for (var i = 0; i < tabs.length; i++) {
        var tabEl = document.getElementById(tabIds[tabs[i]]);
        if (tabEl) tabEl.classList.remove('active');
    }

    // Remove active class from nav items
    var navItems = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }

    // Show selected tab
    var selectedTab = document.getElementById(tabIds[tabName]);
    if (selectedTab) selectedTab.classList.add('active');

    // Add active class to selected nav
    var selectedNav = document.querySelector('.nav-item[data-tab="' + tabName + '"]');
    if (selectedNav) selectedNav.classList.add('active');

    // Update page title
    var titles = {
        peminjaman: 'Peminjaman Buku',
        riwayat: 'Riwayat Peminjaman',
        statistik: 'Statistik Perpustakaan',
        buku: 'Koleksi Buku'
    };

    var subtitles = {
        peminjaman: 'Kelola peminjaman dan pengembalian buku perpustakaan',
        riwayat: 'Lihat seluruh riwayat peminjaman buku',
        statistik: 'Analisis data peminjaman buku perpustakaan',
        buku: 'Daftar koleksi buku yang tersedia di perpustakaan'
    };

    var pageTitle = document.getElementById('pageTitle');
    var pageSubtitle = document.getElementById('pageSubtitle');

    if (pageTitle) pageTitle.innerText = titles[tabName];
    if (pageSubtitle) pageSubtitle.innerText = subtitles[tabName];

    // Refresh specific tab content
    if (tabName === 'buku') renderKoleksiBuku();
    if (tabName === 'statistik') updateStatistikLengkap();
    if (tabName === 'riwayat') renderRiwayat();
    if (tabName === 'peminjaman') renderTabelAktif();
}

// ==================== INITIALIZATION ====================
function init() {
    loadDataFromStorage();
    setDefaultTanggal();
    populateJudulBuku();

    // Event listeners
    var judulSelect = document.getElementById('judulBuku');
    if (judulSelect) {
        judulSelect.addEventListener('change', autoFillKodeBuku);
    }

    var returnKodeInput = document.getElementById('returnKodeBuku');
    if (returnKodeInput) {
        returnKodeInput.addEventListener('input', autoDetectKode);
        returnKodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                prosesPengembalian();
            }
        });
    }

    var formPeminjaman = document.getElementById('formPeminjaman');
    if (formPeminjaman) {
        formPeminjaman.addEventListener('submit', prosesPeminjaman);
    }

    var btnKembalikan = document.getElementById('btnKembalikan');
    if (btnKembalikan) {
        btnKembalikan.addEventListener('click', prosesPengembalian);
    }

    var searchAktif = document.getElementById('searchAktif');
    if (searchAktif) {
        searchAktif.addEventListener('keyup', filterAktif);
    }

    var searchRiwayat = document.getElementById('searchRiwayat');
    if (searchRiwayat) {
        searchRiwayat.addEventListener('keyup', filterRiwayat);
    }

    var filterStatus = document.getElementById('filterStatusRiwayat');
    if (filterStatus) {
        filterStatus.addEventListener('change', filterRiwayat);
    }

    var searchBuku = document.getElementById('searchBuku');
    if (searchBuku) {
        searchBuku.addEventListener('keyup', function() {
            renderKoleksiBuku();
        });
    }

    // Navigation
    var navItems = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function(e) {
            e.preventDefault();
            var tabName = this.getAttribute('data-tab');
            if (tabName) showTab(tabName);
        });
    }

    // Mobile menu
    var mobileToggle = document.getElementById('mobileMenuToggle');
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.getElementById('overlay');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            if (sidebar) sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            if (sidebar) sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
        });
    }

    // Close sidebar on nav click (mobile)
    var closeSidebar = function() {
        if (window.innerWidth <= 768) {
            if (sidebar) sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
        }
    };

    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', closeSidebar);
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);