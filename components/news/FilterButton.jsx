import { IoIosArrowDown } from "react-icons/io";
import { TbMobiledata } from "react-icons/tb";

export const FilterButton = ({ title, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 justify-between p-3 rounded-md border text-sm
        ${isActive ? 'bg-teal-50 border-primary text-primary' : 'bg-white border-gray-200 text-lightGray'}`}
    >
        <span className=" border-2 rounded-[5px] border-primary text-primary">
            <TbMobiledata size={20}/>
        </span>
        <span className='text-sm max-sm:text-xs'>{title}</span>
        <IoIosArrowDown
            size={16}
            className={`mr-1 cust-trans ${isActive ? 'rotate-180' : 'rotate-0'}`}
        />
    </button>
);