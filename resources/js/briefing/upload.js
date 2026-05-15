// Mapa de arquivos indexado por chave única para permitir remoção precisa
const uploadedFiles = [];
let _fileKeyCounter = 0;
const _fileKeyMap = new Map();

const uploadArea = document.getElementById("upload-area");

if (uploadArea) {
	uploadArea.addEventListener("dragover", (e) => {
		e.preventDefault();
		uploadArea.classList.add("dragover");
	});
	uploadArea.addEventListener("dragleave", () =>
		uploadArea.classList.remove("dragover")
	);
	uploadArea.addEventListener("drop", (e) => {
		e.preventDefault();
		uploadArea.classList.remove("dragover");
		handleFiles(e.dataTransfer.files);
	});
}

function handleFiles(files) {
	Array.from(files).forEach((file) => {
		const key = _fileKeyCounter++;
		uploadedFiles.push(file);
		_fileKeyMap.set(key, file);

		if (file.type.startsWith("image/")) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const grid = document.getElementById("file-preview");
				const div = document.createElement("div");
				div.className = "file-thumb";
				div.dataset.fileKey = key;
				div.innerHTML =
					'<img src="' +
					e.target.result +
					'" alt="' +
					file.name +
					'" /><div class="remove-btn" onclick="removeFile(this)">✕</div>';
				grid.appendChild(div);
			};
			reader.readAsDataURL(file);
		} else {
			const docs = document.getElementById("file-docs");
			const div = document.createElement("div");
			div.className = "file-doc-item";
			div.dataset.fileKey = key;
			div.innerHTML =
				'<div class="file-doc-icon">📎</div><div class="file-doc-name">' +
				file.name +
				'</div><div class="file-doc-remove" onclick="removeFile(this)">remover</div>';
			docs.appendChild(div);
		}
	});
}

function removeFile(btn) {
	const container = btn.parentElement;
	const key = parseInt(container.dataset.fileKey);

	// Remove do mapa e do array de arquivos
	if (_fileKeyMap.has(key)) {
		const file = _fileKeyMap.get(key);
		const idx = uploadedFiles.indexOf(file);
		if (idx !== -1) uploadedFiles.splice(idx, 1);
		_fileKeyMap.delete(key);
	}

	container.remove();
}
