// export default function PageHeader() {
//     return (
//         <div id="pageheader-container" className="flex items-center justify-between p-4">
//             <div id="pageheader-left" className="flex flex-col">
//                 <span id="page-title" className="text-3xl font-semibold">
//                     Dashboard
//                 </span>
//                 <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
//                     <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
//                     <span id="breadcrumb-separator" className="text-gray-500">/</span>
//                     <span id="breadcrumb-current" className="text-gray-500">Order List</span>
//                 </div>
//             </div>
//             <div id="action-button">
//                 <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg">
// 		                Add Button
// 		            </button>
//             </div>
//         </div>
//     );
// }

export default function PageHeader({ title = "Dashboard", breadcrumb, children }) {
    const renderBreadcrumb = () => {
        if (!breadcrumb) return null;

        if (typeof breadcrumb === "string") {
            return (
                <span className="text-gray-500">{breadcrumb}</span>
            );
        }

        if (Array.isArray(breadcrumb)) {
            return breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {index !== 0 && <span className="text-gray-500">/</span>}
                    <span className="text-gray-500">{item}</span>
                </div>
            ));
        }

        return null;
    };

    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {renderBreadcrumb()}
                </div>
            </div>
            <div id="action-button" className="flex items-center space-x-2">
                {children}
            </div>
        </div>
    );
}