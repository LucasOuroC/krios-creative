function ImageAbstractFluidArtPainting() {
  return (
    <div className="absolute h-[748.797px] left-0 top-0 w-[611.5px]" data-name="Image (Abstract fluid art painting)">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay className="absolute h-full left-[-58.83%] max-w-none top-[0.04%] w-[217.69%]" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/e85081804d38195fe400b791de40909086a90b47" />
        </video>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-black col-[1] h-[748.797px] justify-self-stretch relative row-[1] shrink-0" data-name="Container">
      <ImageAbstractFluidArtPainting />
    </div>
  );
}

function ImageModernOfficeArchitectureDetail() {
  return (
    <div className="absolute h-[748.797px] left-0 opacity-80 top-0 w-[611.5px]" data-name="Image (Modern office architecture detail)">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/a924725ae17143dd9918d49673968d6eeae3347b" />
      </video>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-black col-[2] h-[748.797px] justify-self-stretch relative row-[1] shrink-0" data-name="Container">
      <ImageModernOfficeArchitectureDetail />
    </div>
  );
}

export default function VisualSystems() {
  return (
    <div className="grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] relative size-full" data-name="VisualSystems">
      <Container />
      <Container1 />
    </div>
  );
}