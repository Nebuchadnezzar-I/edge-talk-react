import HeaderDropdown from '../dropdown/header-dropdown';

export default function Header() {
    return (
        <div className="w-full flex items-center justify-between">
            <h3 className="text-xl font-bold">EdgeTalk</h3>
            <HeaderDropdown />
        </div>
    );
}
