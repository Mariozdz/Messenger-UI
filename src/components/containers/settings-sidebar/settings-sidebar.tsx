import clsx from "clsx";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

interface SettingsSidebarProps {
  isOpen: boolean
}

export function SettingsSidebar({isOpen}: SettingsSidebarProps) {

  return (
    <>{isOpen ? (
      <div
        className={clsx(
          " flex-col w-2/5 bg-back bg-opacity-80 border transition-all duration-500 border-gray-600 "
        )}
      >
        <div className="h-36 border-b border-gray-600" />
        <div className="flex flex-col p-4">
          <div className="p-1 text-white"> Shared media </div>
          <div className="flex flex-row flex-1 p-2 justify-between">
            <div className="flex items-center justify-center rounded-lg h-28 w-28 border border-gray-600 bg-white">
              <Image src={placeholder} alt="_#" className="rounded-lg" />
            </div>
            <div className="flex items-center justify-center rounded-lg h-28 w-28 border border-gray-600 bg-white">
              <Image src={placeholder} alt="_#" className="rounded-lg" />
            </div>
            <div className="flex items-center justify-center rounded-lg h-28 w-28 border border-gray-600 bg-white">
              <Image src={placeholder} alt="_#" className="rounded-lg" />
            </div>
            <div className="flex items-center justify-center rounded-lg h-28 w-28 border border-gray-600 bg-white">
              <Image src={placeholder} alt="_#" className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4">
          <div className="p-1 text-white"> Shared files </div>
          <div className="flex flex-col flex-1 p-2 space-y-4 justify-between">
            <div className="flex items-center justify-between rounded h-20 w-ful">
              <div className="flex flex-row space-x-4 text-white">
                <div className="flex flex-row items-center justify-center rounded-lg h-16 w-16 border border-gray-600">
                  A
                </div>
                <div className="flex flex-col">
                  <div>Archivo 1</div>
                  <div>{new Date().toDateString()} </div>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faDownload}
                className="text-xl w-8 h-8 text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="bg-back bg-opacity-80 w-0 transition-all duration-500" />
    )}</>
  )
}