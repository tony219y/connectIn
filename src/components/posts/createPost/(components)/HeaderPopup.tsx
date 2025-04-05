import { AvatarProfile } from "@/components/profile/ProfileCart"

interface HeaderPopupProps {
    username: string;
    value: string;
    onChange: (value: string) => void;
}

// visbility
const visbility = [
    {key: "public", value: "Public"},
    {key: "private", value: "Private"},
]
export const HeaderPopup = ({value, username, onChange}:HeaderPopupProps) => {
  return (
        <div className="flex w-full text-white px-4 py-2 items-center gap-4">
            <AvatarProfile />
            <div>
                <h1>{username}</h1>
                <select name={visbility[0].value} value={value} onChange={(e) => onChange(e.target.value)}>
                    {visbility.map((item) => (
                        <option   className="text-black" key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
            </div>
        </div>
  )
}