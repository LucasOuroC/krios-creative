import svgPaths from "./svg-6o9x5wz7sc";
import imgFrame90 from "../assets/c4d88cbac5f8267aefd0182488f86075234c8874.png";
import imgImageProjeto1 from "../assets/8dfd4dadb3681d519a9311e11f6d5423c1b70c6c.png";
import imgImageProjeto2 from "../assets/a3e7e2319c1d5f0bfa86b9b6a875840de77d53a2.png";
import imgImageProjeto3 from "../assets/2a614220d504b63e30c905a386231ae8ca253a96.png";
import imgAtivo31 from "../assets/486251245151822be7abb300220ed42600648afc.png";

function Text() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-start left-0 top-[147.5px] w-[583.805px]" data-name="Text">
      <p className="font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[75px] relative shrink-0 text-[#c2c2c2] text-[60px] whitespace-pre">Precisam dizer melhor.</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[225px] left-0 top-0 w-[600.078px]" data-name="Heading 2">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[75px] left-0 text-[60px] text-white top-[0.5px] w-[570px] whitespace-pre-wrap">Marcas não precisam dizer mais.</p>
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[24px] left-0 not-italic text-[16px] text-justify text-white top-[-1px] w-[382px] whitespace-pre-wrap">A Krios existe para negócios que já cresceram e agora precisam de direção, não de barulho. Criatividade, aqui, não é estética isolada. É curadoria. É decisão. É estratégia aplicada com intenção.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[24px] left-0 not-italic text-[16px] text-justify text-white top-[-1px] w-[382px] whitespace-pre-wrap">Entramos para organizar discursos, reposicionar percepções e construir marcas que sustentam valor no longo prazo. Menos ruído. Mais clareza.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[192px] items-start left-[32px] top-0 w-[381.914px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[87.76px] size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute border-b border-solid border-white h-[21px] left-[32px] top-[237.5px] w-[103.758px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-white top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Sobre nós</p>
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute border-[#d4d4d0] border-l border-solid h-[258.5px] left-[648.08px] top-0 w-[414.914px]" data-name="Container">
      <Container1 />
      <Link />
    </div>
  );
}

function Manifesto() {
  return (
    <div className="absolute h-[258.5px] left-[80px] top-[160px] w-[1063px]" data-name="Manifesto">
      <Heading />
      <Container />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[579px] left-0 top-[832px] w-[1223px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame90} />
      <Manifesto />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[184.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6b6b6b] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Projetos relevantes</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[91.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">2025 — 2026</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[16px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function ImageProjeto() {
  return (
    <div className="h-[476.25px] relative shrink-0 w-full" data-name="Image (Projeto 1)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageProjeto1} />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#ececf0] content-stretch flex flex-col h-[476.25px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageProjeto />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[381px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-[0.5px] whitespace-pre">VGIA holding</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[381px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.5px] tracking-[0.5px] uppercase whitespace-pre">Branding / Design de Marca</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d4d4d0] border-solid border-t inset-0 pointer-events-none" />
      <Heading1 />
      <Text3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[616.25px] items-start left-0 top-0 w-[381px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function ImageProjeto1() {
  return (
    <div className="h-[476.25px] relative shrink-0 w-full" data-name="Image (Projeto 2)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageProjeto2} />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#ececf0] content-stretch flex flex-col h-[476.25px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageProjeto1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[381px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-[0.5px] whitespace-pre">Sacred / Saint Faith</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[381px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.5px] tracking-[0.5px] uppercase whitespace-pre">{`Typography design /  Clothing`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d4d4d0] border-solid border-t inset-0 pointer-events-none" />
      <Heading2 />
      <Text4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[552.25px] items-start left-[397px] top-[64px] w-[381px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function ImageProjeto2() {
  return (
    <div className="h-[476.25px] relative shrink-0 w-full" data-name="Image (Projeto 3)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageProjeto3} />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#ececf0] content-stretch flex flex-col h-[476.25px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageProjeto2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[381px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-[0.5px] whitespace-pre">Codax</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[381px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.5px] tracking-[0.5px] uppercase whitespace-pre">{`Direção criativa e design de conteúdo `}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start pb-0 pt-[13px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d4d4d0] border-solid border-t inset-0 pointer-events-none" />
      <Heading3 />
      <Text5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[616.25px] items-start left-[794px] top-0 w-[381px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[616.25px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
      <Container10 />
    </div>
  );
}

function Projects() {
  return (
    <div className="absolute bg-[#eee] content-stretch flex flex-col gap-[64px] h-[857.25px] items-start left-0 pb-0 pt-[81px] px-[24px] top-[1410.5px] w-[1223px]" data-name="Projects">
      <div aria-hidden="true" className="absolute border-[#d4d4d0] border-solid border-t inset-0 pointer-events-none" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function ImageAbstractFluidArtPainting() {
  return (
    <div className="absolute h-[748.797px] left-0 top-0 w-[611.5px]" data-name="Image (Abstract fluid art painting)">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/e85081804d38195fe400b791de40909086a90b47" />
      </video>
    </div>
  );
}

function Container13() {
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

function Container14() {
  return (
    <div className="bg-black col-[2] h-[748.797px] justify-self-stretch relative row-[1] shrink-0" data-name="Container">
      <ImageModernOfficeArchitectureDetail />
    </div>
  );
}

function VisualSystems() {
  return (
    <div className="absolute grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[748.797px] left-0 overflow-clip top-[2267.75px] w-[1223px]" data-name="VisualSystems">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[448.19px] not-italic text-[#6b6b6b] text-[10px] text-center top-[0.5px] tracking-[2px] translate-x-[-50%] uppercase whitespace-pre">Capacidades</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-b border-solid h-[37px] left-[201.66px] top-0 w-[287.383px]" data-name="List Item">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[32px] left-[144px] not-italic text-[#1a1a1a] text-[24px] text-center top-[-1px] tracking-[0.6px] translate-x-[-50%] whitespace-pre">desdobramentos digitais</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-b border-solid h-[37px] left-[489.04px] top-0 w-[205.297px]" data-name="List Item">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[32px] left-[103.5px] not-italic text-[#1a1a1a] text-[24px] text-center top-[-1px] tracking-[0.6px] translate-x-[-50%] whitespace-pre">experiências web</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-b border-solid h-[37px] left-[230.47px] top-[61px] w-[435.063px]" data-name="List Item">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[32px] left-[218.5px] not-italic text-[#1a1a1a] text-[24px] text-center top-[-1px] tracking-[0.6px] translate-x-[-50%] whitespace-pre">sistemas de comunicação integrados</p>
    </div>
  );
}

function List() {
  return (
    <div className="h-[98px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[161px] items-start relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <List />
    </div>
  );
}

function Services() {
  return (
    <div className="absolute bg-[#f4f3ef] content-stretch flex flex-col h-[354px] items-start left-0 pb-px pt-[96px] px-[163.5px] top-[3016.55px] w-[1223px]" data-name="Services">
      <div aria-hidden="true" className="absolute border-[#d4d4d0] border-b border-solid inset-0 pointer-events-none" />
      <Container15 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-start left-[363.16px] top-[327px] w-[664.172px]" data-name="Text">
      <p className="font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[48.75px] relative shrink-0 text-[#4a5565] text-[30px] text-center whitespace-pre">Quando a marca deixa de reagir e passa a conduzir.</p>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="absolute bg-[#f0f0f0] h-[499.75px] left-0 top-[3370.55px] w-[1223px]" data-name="Testimonial">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal h-[290px] leading-[48.75px] left-[610.5px] text-[#1e2939] text-[30px] text-center top-[74.45px] translate-x-[-50%] w-[895px] whitespace-pre-wrap">{`"Crescer é fácil. Sustentar valor é outra história. Marcas que sabem quem são: cobram melhor, comunicam menos, decidem com mais precisão. Se a sua marca já chegou até aqui, talvez o próximo passo não seja fazer mais — mas fazer com intenção. A Krios trabalha nesse ponto.`}</p>
      <Text7 />
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[48.75px] left-[1031.83px] text-[#1e2939] text-[30px] text-center top-[322px] translate-x-[-50%] whitespace-pre">{`"`}</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[245.328px]" data-name="Heading 2">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#1a1a1a] text-[36px] top-0 whitespace-pre">Iniciar Projeto</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[113.75px] left-0 top-[64px] w-[245.328px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] w-[242px] whitespace-pre-wrap">Se você está considerando um novo projeto, preencha o formulário abaixo. Analisamos cada contato com atenção e retornamos caso faça sentido seguir a conversa.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6b6b6b] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Contato Direto</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">hello@krios.studio</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[40px] items-start left-0 top-[225.75px] w-[245.328px]" data-name="Container">
      <Paragraph3 />
      <Link1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6b6b6b] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Social</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Instagram</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">LinkedIn</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-0 top-[297.75px] w-[245.328px]" data-name="Container">
      <Paragraph4 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[453px] left-0 top-0 w-[245.328px]" data-name="Container">
      <Heading4 />
      <Paragraph2 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute h-[20px] left-0 top-[12px] w-[39.375px]" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] whitespace-pre">Nome</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[261.336px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-pre">{` `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(107,107,107,0.3)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[261.336px]" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute h-[20px] left-0 top-[12px] w-[57.703px]" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] whitespace-pre">Empresa</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[261.336px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-pre">{` `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(107,107,107,0.3)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[41px] left-[293.34px] top-0 w-[261.336px]" data-name="Container">
      <Label1 />
      <TextInput1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute h-[20px] left-0 top-[12px] w-[65.914px]" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] whitespace-pre">Instagram</p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[261.336px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-pre">{` `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(107,107,107,0.3)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[261.336px]" data-name="Container">
      <Label2 />
      <TextInput2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute h-[20px] left-0 top-[12px] w-[53.211px]" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] whitespace-pre">Website</p>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[261.336px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-pre">{` `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(107,107,107,0.3)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[41px] left-[293.34px] top-0 w-[261.336px]" data-name="Container">
      <Label3 />
      <TextInput3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute h-[20px] left-0 top-[12px] w-[35.328px]" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] whitespace-pre">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[554.672px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-0 py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-pre">{` `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(107,107,107,0.3)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <EmailInput />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute h-[20px] left-0 top-[12px] w-[170.734px]" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6b6b6b] text-[14px] top-[0.5px] whitespace-pre">Breve contexto do projeto</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute h-[101px] left-0 top-0 w-[554.672px]" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip px-0 py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,26,0.5)] whitespace-pre">{` `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(107,107,107,0.3)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[101px] relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <TextArea />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[15px] left-[392.73px] top-[86px] w-[161.938px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[162px] not-italic text-[#6b6b6b] text-[10px] text-right top-[0.5px] tracking-[1px] translate-x-[-100%] uppercase whitespace-pre">Entraremos em contato.</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[51.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[26px] not-italic text-[#1a1a1a] text-[12px] text-center top-[0.5px] tracking-[1.2px] translate-x-[-50%] uppercase whitespace-pre">Enviar</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[42px] left-[413.09px] top-[32px] w-[141.578px]" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Text9 />
        <Icon1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#1a1a1a] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[101px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Button />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[453px] items-start left-[309.33px] top-0 w-[554.672px]" data-name="Form">
      <Container19 />
      <Container22 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute h-[453px] left-[179.5px] top-[3966.3px] w-[864px]" data-name="Contact">
      <Container16 />
      <Form />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[15px] relative shrink-0 w-[270.789px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.5px] tracking-[1px] uppercase whitespace-pre">© 2024 Krios Studio. All rights reserved.</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.5px] tracking-[1px] uppercase whitespace-pre">Privacidade</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#6b6b6b] text-[10px] top-[0.5px] tracking-[1px] uppercase whitespace-pre">Termos</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[15px] relative shrink-0 w-[148.273px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex h-[96px] items-center justify-between left-0 pb-0 pt-px px-[24px] top-[4515.3px] w-[1223px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#d4d4d0] border-solid border-t inset-0 pointer-events-none" />
      <Container28 />
      <Container29 />
    </div>
  );
}

function ImageAbstractFluidLightRefractionBackground() {
  return (
    <div className="absolute h-[832px] left-0 top-0 w-[1223px]" data-name="Image (Abstract fluid light refraction background)">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/a5f7406ad02837a2a86c7b034fe740ae9c9ccf1c" />
      </video>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[832px] left-0 top-0 w-[1223px]" data-name="Container">
      <ImageAbstractFluidLightRefractionBackground />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] opacity-50 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 16">
            <path d="M1 1V15" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-14.29%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
            <path d="M15 1L8 8L1 1" id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[599.5px] size-[24px] top-[764.99px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[832px] left-0 overflow-clip top-0 w-[1223px]" data-name="Hero">
      <Container30 />
      <div className="absolute h-[200px] left-[calc(50%-12px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[167px]" data-name="Ativo 3 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAtivo31} />
      </div>
      <Container31 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[4611.297px] left-0 top-0 w-[1223px]" data-name="App">
      <Frame />
      <Projects />
      <VisualSystems />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Hero />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[28px] relative shrink-0 w-[71.445px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#1a1a1a] text-[20px] top-[0.5px] tracking-[2px] uppercase whitespace-pre">Krios</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80.07px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Manifesto</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[71.758px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Projetos</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Capacidades</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[65.398px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[#1a1a1a] text-[12px] top-[0.5px] tracking-[1.2px] uppercase whitespace-pre">Contato</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[16px] relative shrink-0 w-[385.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(244,243,239,0.8)] content-stretch flex h-[61px] items-center justify-between left-0 pb-px pt-0 px-[24px] top-0 w-[1223px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#d4d4d0] border-b border-solid inset-0 pointer-events-none" />
      <Container32 />
      <Container33 />
    </div>
  );
}

export default function Estudio() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="Estudio">
      <App />
      <Navigation />
    </div>
  );
}