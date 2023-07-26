import general from '../vector/general.svg'
import dentists from '../vector/dentists.svg'
import eye from '../vector/eye.svg'
import nutrition from '../vector/nutrition.svg'
import neurologist from '../vector/neurologist.svg'
import pediatric from '../vector/pediatric.svg'
import radiologist from '../vector/radiologist.svg'
import cardiologist from '../vector/cardiologist.svg'

export function General() {
  return (
    <div className="flex flex-col text-center w-16 justify-center items-center">
      <div className="w-[3rem] h-[3rem] rounded-full bg-blue-50 flex cursor-pointer justify-center items-center">
        <img src={general} alt="" />
      </div>
      <p className="text-[1rem] font-[500]">General</p>
    </div>
  )
}
export function Dentists() {
  return (
    <div className="flex flex-col text-center w-16 justify-center items-center">
      <div className="w-[3rem] h-[3rem] rounded-full bg-blue-50 flex cursor-pointer justify-center items-center">
        <img src={dentists} alt="" />
      </div>
      <p className="text-[1rem] font-[500]">Dentists</p>
    </div>
  )
}
export function Optometrist() {
  return (
    <div className="flex flex-col text-center w-16 justify-center items-center">
      <div className="w-[3rem] h-[3rem] rounded-full bg-blue-50 flex cursor-pointer justify-center items-center">
        <img src={eye} alt="" />
      </div>
      <p className="text-[1rem] font-[500]">Optom.</p>
    </div>
  )
}
export function Nutritionist() {
  return (
    <div className="flex flex-col text-center w-16 justify-center items-center">
      <div className="w-[3rem] h-[3rem] rounded-full bg-blue-50 flex cursor-pointer justify-center items-center">
        <img src={nutrition} alt="" />
      </div>
      <p className="text-[1rem] font-[500]">Nutri.</p>
    </div>
  )
}
export function Neurologist() {
  return (
    <div className="flex flex-col text-center w-16 justify-center items-center">
      <div className="w-[3rem] h-[3rem] rounded-full bg-blue-50 flex cursor-pointer justify-center items-center">
        <img src={neurologist} alt="" />
      </div>
      <p className="text-[1rem] font-[500]">Neurol.</p>
    </div>
  )
}
export function Pediatric() {
  return (
    <div className="flex flex-col text-center w-16 justify-center items-center">
      <div className="w-[3rem] h-[3rem] rounded-full bg-blue-50 flex cursor-pointer justify-center items-center">
        <img src={pediatric} alt="" />
      </div>
      <p className="text-[1rem] font-[500]">Pediatric</p>
    </div>
  )
}
export function Radiologist() {
  return (
    <div className="flex flex-col text-center w-16 justify-center items-center">
      <div className="w-[3rem] h-[3rem] rounded-full bg-blue-50 flex cursor-pointer justify-center items-center">
        <img src={radiologist} alt="" />
      </div>
      <p className="text-[1rem] font-[500]">Radiol.</p>
    </div>
  )
}
export function Cardiologist() {
  return (
    <div className="flex flex-col text-center w-16 justify-center items-center">
      <div className="w-[3rem] h-[3rem] rounded-full bg-blue-50 flex cursor-pointer justify-center items-center">
        <img src={cardiologist} alt="" />
      </div>
      <p className="text-[1rem] font-[500]">Cardiol.</p>
    </div>
  )
}
