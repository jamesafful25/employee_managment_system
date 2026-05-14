import { useState } from 'react';
import { uploadFile } from '../../api/uploadAPI';

const UploadsPage = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const showMessage = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 4000);
    };

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected) setFile(selected);
    };

    const handleUpload = async () => {
        if (!file) {
            showMessage('error', 'Please select a file first');
            return;
        }
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await uploadFile(formData);
            const uploaded = res.data.data;

            setUploadedFiles(prev => [uploaded, ...prev]);
            setFile(null);

            const input = document.getElementById('file-input');
            if (input) input.value = '';

            showMessage('success', 'File uploaded successfully');
        } catch (err) {
            const msg = err.response?.data?.message || 'Failed to upload file';
            showMessage('error', msg);
        } finally {
            setLoading(false);
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <div className="max-w-2xl space-y-4">

            {message.text && (
                <div className={`p-3 rounded-lg text-sm ${message.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {message.text}
                </div>
            )}

            {/* Upload section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                <h3 className="text-sm font-semibold text-gray-900">Upload File</h3>
                <p className="text-xs text-gray-500">Supports JPG, PNG, PDF up to 5MB</p>

                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                        Select File
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {file && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-xs text-green-700 font-medium">{file.name}</p>
                        <p className="text-xs text-green-600">{formatFileSize(file.size)}</p>
                    </div>
                )}

                <button
                    onClick={handleUpload}
                    disabled={!file || loading}
                    className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium rounded-lg transition"
                >
                    {loading ? 'Uploading...' : 'Upload File'}
                </button>
            </div>

            {/* Uploaded files */}
            {uploadedFiles.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900">
                            Uploaded this session ({uploadedFiles.length})
                        </h3>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {uploadedFiles.map((f, index) => (
                            <div key={index} className="px-6 py-4 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {f.original_name || f.file_name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {formatFileSize(f.file_size)} • {f.file_type}
                                    </p>
                                </div>

                                <a
                                    href={`http://localhost:3000/${f.file_path}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                                >
                                    View
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default UploadsPage;