interface CheckboxGroupProps {
    options: {
        all: boolean;
        vouchers: boolean;
        products: boolean;
        others: boolean;
    };
    onChange: (option: keyof CheckboxGroupProps['options']) => void;
}

export default function FilterCheckbox({ options, onChange }: CheckboxGroupProps) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-lead font-medium">Award Type</span>
            <div className="flex items-center gap-3">
                <input onChange={() => onChange('all')} checked={options.all} value='all' id="all-type" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="all-type" className="text-lead text-blue-600">All Type</label>
            </div>
            <div className="flex items-center gap-3">
                <input onChange={() => onChange('vouchers')} checked={options.vouchers} value='Vouchers' id="vouchers" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="vouchers" className="text-lead text-blue-600">Vouchers</label>
            </div>
            <div className="flex items-center gap-3">
                <input onChange={() => onChange('products')} checked={options.products} value='Products' id="products" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="products" className="text-lead text-blue-600">Products</label>
            </div>
            <div className="flex items-center gap-3">
                <input onChange={() => onChange('others')} checked={options.others} value='Others' id="others" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="others" className="text-lead text-blue-600">Others</label>
            </div>
        </div>
    )
}