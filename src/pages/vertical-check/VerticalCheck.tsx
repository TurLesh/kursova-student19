import { FC, ChangeEvent, useState } from 'react';
import './VerticalCheck.css';

const VerticalCheck: FC = () => {
    // column 1 states
    const [value11, setValue11] = useState<number | null>();
    const [value21, setValue21] = useState<number | null>();
    const [value31, setValue31] = useState<number | null>();
    const [value41, setValue41] = useState<number | null>();
    const [value51, setValue51] = useState<number | null>();
    const [value61, setValue61] = useState<number | null>();
    const [value71, setValue71] = useState<number | null>();
    const [value81, setValue81] = useState<number | null>();
    const [value91, setValue91] = useState<number | null>();

    //column 2 states
    const [value12, setValue12] = useState<number | null>();
    const [value22, setValue22] = useState<number | null>();
    const [value32, setValue32] = useState<number | null>();
    const [value42, setValue42] = useState<number | null>();
    const [value52, setValue52] = useState<number | null>();
    const [value62, setValue62] = useState<number | null>();
    const [value72, setValue72] = useState<number | null>();
    const [value82, setValue82] = useState<number | null>();
    const [value92, setValue92] = useState<number | null>();

    //column 3 states
    const [value13, setValue13] = useState<number | null>();
    const [value23, setValue23] = useState<number | null>();
    const [value33, setValue33] = useState<number | null>();
    const [value43, setValue43] = useState<number | null>();
    const [value53, setValue53] = useState<number | null>();
    const [value63, setValue63] = useState<number | null>();
    const [value73, setValue73] = useState<number | null>();
    const [value83, setValue83] = useState<number | null>();
    const [value93, setValue93] = useState<number | null>();

    //column 4 states
    const [value14, setValue14] = useState<number | null>();
    const [value24, setValue24] = useState<number | null>();
    const [value34, setValue34] = useState<number | null>();
    const [value44, setValue44] = useState<number | null>();
    const [value54, setValue54] = useState<number | null>();
    const [value64, setValue64] = useState<number | null>();
    const [value74, setValue74] = useState<number | null>();
    const [value84, setValue84] = useState<number | null>();
    const [value94, setValue94] = useState<number | null>();

    //column 5 states
    const [value15, setValue15] = useState<number | null>();
    const [value25, setValue25] = useState<number | null>();
    const [value35, setValue35] = useState<number | null>();
    const [value45, setValue45] = useState<number | null>();
    const [value55, setValue55] = useState<number | null>();
    const [value65, setValue65] = useState<number | null>();
    const [value75, setValue75] = useState<number | null>();
    const [value85, setValue85] = useState<number | null>();
    const [value95, setValue95] = useState<number | null>();

    //column 6 states
    const [value16, setValue16] = useState<number | null>();
    const [value26, setValue26] = useState<number | null>();
    const [value36, setValue36] = useState<number | null>();
    const [value46, setValue46] = useState<number | null>();
    const [value56, setValue56] = useState<number | null>();
    const [value66, setValue66] = useState<number | null>();
    const [value76, setValue76] = useState<number | null>();
    const [value86, setValue86] = useState<number | null>();
    const [value96, setValue96] = useState<number | null>();

    //column 7 states
    const [value17, setValue17] = useState<number | null>();
    const [value27, setValue27] = useState<number | null>();
    const [value37, setValue37] = useState<number | null>();
    const [value47, setValue47] = useState<number | null>();
    const [value57, setValue57] = useState<number | null>();
    const [value67, setValue67] = useState<number | null>();
    const [value77, setValue77] = useState<number | null>();
    const [value87, setValue87] = useState<number | null>();
    const [value97, setValue97] = useState<number | null>();

    //column 8 states
    const [value18, setValue18] = useState<number | null>();
    const [value28, setValue28] = useState<number | null>();
    const [value38, setValue38] = useState<number | null>();
    const [value48, setValue48] = useState<number | null>();
    const [value58, setValue58] = useState<number | null>();
    const [value68, setValue68] = useState<number | null>();
    const [value78, setValue78] = useState<number | null>();
    const [value88, setValue88] = useState<number | null>();
    const [value98, setValue98] = useState<number | null>();

    //column 9 states
    const [value19, setValue19] = useState<number | null>();
    const [value29, setValue29] = useState<number | null>();
    const [value39, setValue39] = useState<number | null>();
    const [value49, setValue49] = useState<number | null>();
    const [value59, setValue59] = useState<number | null>();
    const [value69, setValue69] = useState<number | null>();
    const [value79, setValue79] = useState<number | null>();
    const [value89, setValue89] = useState<number | null>();
    const [value99, setValue99] = useState<number | null>();

    //column 10 states
    const [value110, setValue110] = useState<number | null>();
    const [value210, setValue210] = useState<number | null>();
    const [value310, setValue310] = useState<number | null>();
    const [value410, setValue410] = useState<number | null>();
    const [value510, setValue510] = useState<number | null>();
    const [value610, setValue610] = useState<number | null>();
    const [value710, setValue710] = useState<number | null>();
    const [value810, setValue810] = useState<number | null>();
    const [value910, setValue910] = useState<number | null>();

    //column 11 states
    const [value111, setValue111] = useState<number | null>();
    const [value211, setValue211] = useState<number | null>();
    const [value311, setValue311] = useState<number | null>();
    const [value411, setValue411] = useState<number | null>();
    const [value511, setValue511] = useState<number | null>();
    const [value611, setValue611] = useState<number | null>();
    const [value711, setValue711] = useState<number | null>();
    const [value811, setValue811] = useState<number | null>();
    const [value911, setValue911] = useState<number | null>();

    //column 12 states
    const [value112, setValue112] = useState<number | null>();
    const [value212, setValue212] = useState<number | null>();
    const [value312, setValue312] = useState<number | null>();
    const [value412, setValue412] = useState<number | null>();
    const [value512, setValue512] = useState<number | null>();
    const [value612, setValue612] = useState<number | null>();
    const [value712, setValue712] = useState<number | null>();
    const [value812, setValue812] = useState<number | null>();
    const [value912, setValue912] = useState<number | null>();

    //column 13 states
    const [value113, setValue113] = useState<number | null>();
    const [value213, setValue213] = useState<number | null>();
    const [value313, setValue313] = useState<number | null>();
    const [value413, setValue413] = useState<number | null>();
    const [value513, setValue513] = useState<number | null>();
    const [value613, setValue613] = useState<number | null>();
    const [value713, setValue713] = useState<number | null>();
    const [value813, setValue813] = useState<number | null>();
    const [value913, setValue913] = useState<number | null>();

    //column 14 states
    const [value114, setValue114] = useState<number | null>();
    const [value214, setValue214] = useState<number | null>();
    const [value314, setValue314] = useState<number | null>();
    const [value414, setValue414] = useState<number | null>();
    const [value514, setValue514] = useState<number | null>();
    const [value614, setValue614] = useState<number | null>();
    const [value714, setValue714] = useState<number | null>();
    const [value814, setValue814] = useState<number | null>();
    const [value914, setValue914] = useState<number | null>();

    //column 15 states
    const [value115, setValue115] = useState<number | null>();
    const [value215, setValue215] = useState<number | null>();
    const [value315, setValue315] = useState<number | null>();
    const [value415, setValue415] = useState<number | null>();
    const [value515, setValue515] = useState<number | null>();
    const [value615, setValue615] = useState<number | null>();
    const [value715, setValue715] = useState<number | null>();
    const [value815, setValue815] = useState<number | null>();
    const [value915, setValue915] = useState<number | null>();

    //column 16 states
    const [value116, setValue116] = useState<number | null>();
    const [value216, setValue216] = useState<number | null>();
    const [value316, setValue316] = useState<number | null>();
    const [value416, setValue416] = useState<number | null>();
    const [value516, setValue516] = useState<number | null>();
    const [value616, setValue616] = useState<number | null>();
    const [value716, setValue716] = useState<number | null>();
    const [value816, setValue816] = useState<number | null>();
    const [value916, setValue916] = useState<number | null>();

    //column 17 states
    const [value117, setValue117] = useState<number | null>();
    const [value217, setValue217] = useState<number | null>();
    const [value317, setValue317] = useState<number | null>();
    const [value417, setValue417] = useState<number | null>();
    const [value517, setValue517] = useState<number | null>();
    const [value617, setValue617] = useState<number | null>();
    const [value717, setValue717] = useState<number | null>();
    const [value817, setValue817] = useState<number | null>();
    const [value917, setValue917] = useState<number | null>();

    //column 18 states
    const [value118, setValue118] = useState<number | null>();
    const [value218, setValue218] = useState<number | null>();
    const [value318, setValue318] = useState<number | null>();
    const [value418, setValue418] = useState<number | null>();
    const [value518, setValue518] = useState<number | null>();
    const [value618, setValue618] = useState<number | null>();
    const [value718, setValue718] = useState<number | null>();
    const [value818, setValue818] = useState<number | null>();
    const [value918, setValue918] = useState<number | null>();

    //column 19 states
    const [value119, setValue119] = useState<number | null>();
    const [value219, setValue219] = useState<number | null>();
    const [value319, setValue319] = useState<number | null>();
    const [value419, setValue419] = useState<number | null>();
    const [value519, setValue519] = useState<number | null>();
    const [value619, setValue619] = useState<number | null>();
    const [value719, setValue719] = useState<number | null>();
    const [value819, setValue819] = useState<number | null>();
    const [value919, setValue919] = useState<number | null>();

    //column 20 states
    const [value120, setValue120] = useState<number | null>();
    const [value220, setValue220] = useState<number | null>();
    const [value320, setValue320] = useState<number | null>();
    const [value420, setValue420] = useState<number | null>();
    const [value520, setValue520] = useState<number | null>();
    const [value620, setValue620] = useState<number | null>();
    const [value720, setValue720] = useState<number | null>();
    const [value820, setValue820] = useState<number | null>();
    const [value920, setValue920] = useState<number | null>();

    //column 1 change handlers
    const change11 = (event: ChangeEvent<HTMLInputElement>) => {
        const num11 = parseInt(event.target.value);
        setValue11(num11);
    };

    const change21 = (event: ChangeEvent<HTMLInputElement>) => {
        const num21 = parseInt(event.target.value);
        setValue21(num21);
    };

    const change31 = (event: ChangeEvent<HTMLInputElement>) => {
        const num31 = parseInt(event.target.value);
        setValue31(num31);
    };

    const change41 = (event: ChangeEvent<HTMLInputElement>) => {
        const num41 = parseInt(event.target.value);
        setValue41(num41);
    };

    const change51 = (event: ChangeEvent<HTMLInputElement>) => {
        const num51 = parseInt(event.target.value);
        setValue51(num51);
    };

    const change61 = (event: ChangeEvent<HTMLInputElement>) => {
        const num61 = parseInt(event.target.value);
        setValue61(num61);
    };

    const change71 = (event: ChangeEvent<HTMLInputElement>) => {
        const num71 = parseInt(event.target.value);
        setValue71(num71);
    };

    const change81 = (event: ChangeEvent<HTMLInputElement>) => {
        const num81 = parseInt(event.target.value);
        setValue81(num81);
    };

    const change91 = (event: ChangeEvent<HTMLInputElement>) => {
        const num91 = parseInt(event.target.value);
        setValue91(num91);
    };

    //column 2 change handlers
    const change12 = (event: ChangeEvent<HTMLInputElement>) => {
        const num12 = parseInt(event.target.value);
        setValue12(num12);
    };

    const change22 = (event: ChangeEvent<HTMLInputElement>) => {
        const num22 = parseInt(event.target.value);
        setValue22(num22);
    };

    const change32 = (event: ChangeEvent<HTMLInputElement>) => {
        const num32 = parseInt(event.target.value);
        setValue32(num32);
    };

    const change42 = (event: ChangeEvent<HTMLInputElement>) => {
        const num42 = parseInt(event.target.value);
        setValue42(num42);
    };

    const change52 = (event: ChangeEvent<HTMLInputElement>) => {
        const num52 = parseInt(event.target.value);
        setValue52(num52);
    };

    const change62 = (event: ChangeEvent<HTMLInputElement>) => {
        const num62 = parseInt(event.target.value);
        setValue62(num62);
    };

    const change72 = (event: ChangeEvent<HTMLInputElement>) => {
        const num72 = parseInt(event.target.value);
        setValue72(num72);
    };

    const change82 = (event: ChangeEvent<HTMLInputElement>) => {
        const num82 = parseInt(event.target.value);
        setValue82(num82);
    };

    const change92 = (event: ChangeEvent<HTMLInputElement>) => {
        const num92 = parseInt(event.target.value);
        setValue92(num92);
    };

    //column 3 change handlers
    const change13 = (event: ChangeEvent<HTMLInputElement>) => {
        const num13 = parseInt(event.target.value);
        setValue13(num13);
    };

    const change23 = (event: ChangeEvent<HTMLInputElement>) => {
        const num23 = parseInt(event.target.value);
        setValue23(num23);
    };

    const change33 = (event: ChangeEvent<HTMLInputElement>) => {
        const num33 = parseInt(event.target.value);
        setValue33(num33);
    };

    const change43 = (event: ChangeEvent<HTMLInputElement>) => {
        const num43 = parseInt(event.target.value);
        setValue43(num43);
    };

    const change53 = (event: ChangeEvent<HTMLInputElement>) => {
        const num53 = parseInt(event.target.value);
        setValue53(num53);
    };

    const change63 = (event: ChangeEvent<HTMLInputElement>) => {
        const num63 = parseInt(event.target.value);
        setValue63(num63);
    };

    const change73 = (event: ChangeEvent<HTMLInputElement>) => {
        const num73 = parseInt(event.target.value);
        setValue73(num73);
    };

    const change83 = (event: ChangeEvent<HTMLInputElement>) => {
        const num83 = parseInt(event.target.value);
        setValue83(num83);
    };

    const change93 = (event: ChangeEvent<HTMLInputElement>) => {
        const num93 = parseInt(event.target.value);
        setValue93(num93);
    };

    //column 4 change handlers
    const change14 = (event: ChangeEvent<HTMLInputElement>) => {
        const num14 = parseInt(event.target.value);
        setValue14(num14);
    };

    const change24 = (event: ChangeEvent<HTMLInputElement>) => {
        const num24 = parseInt(event.target.value);
        setValue24(num24);
    };

    const change34 = (event: ChangeEvent<HTMLInputElement>) => {
        const num34 = parseInt(event.target.value);
        setValue34(num34);
    };

    const change44 = (event: ChangeEvent<HTMLInputElement>) => {
        const num44 = parseInt(event.target.value);
        setValue44(num44);
    };

    const change54 = (event: ChangeEvent<HTMLInputElement>) => {
        const num54 = parseInt(event.target.value);
        setValue54(num54);
    };

    const change64 = (event: ChangeEvent<HTMLInputElement>) => {
        const num64 = parseInt(event.target.value);
        setValue64(num64);
    };

    const change74 = (event: ChangeEvent<HTMLInputElement>) => {
        const num74 = parseInt(event.target.value);
        setValue74(num74);
    };

    const change84 = (event: ChangeEvent<HTMLInputElement>) => {
        const num84 = parseInt(event.target.value);
        setValue84(num84);
    };

    const change94 = (event: ChangeEvent<HTMLInputElement>) => {
        const num94 = parseInt(event.target.value);
        setValue94(num94);
    };

    //column 5 change handlers
    const change15 = (event: ChangeEvent<HTMLInputElement>) => {
        const num15 = parseInt(event.target.value);
        setValue15(num15);
    };

    const change25 = (event: ChangeEvent<HTMLInputElement>) => {
        const num25 = parseInt(event.target.value);
        setValue25(num25);
    };

    const change35 = (event: ChangeEvent<HTMLInputElement>) => {
        const num35 = parseInt(event.target.value);
        setValue35(num35);
    };

    const change45 = (event: ChangeEvent<HTMLInputElement>) => {
        const num45 = parseInt(event.target.value);
        setValue45(num45);
    };

    const change55 = (event: ChangeEvent<HTMLInputElement>) => {
        const num55 = parseInt(event.target.value);
        setValue55(num55);
    };

    const change65 = (event: ChangeEvent<HTMLInputElement>) => {
        const num65 = parseInt(event.target.value);
        setValue65(num65);
    };

    const change75 = (event: ChangeEvent<HTMLInputElement>) => {
        const num75 = parseInt(event.target.value);
        setValue75(num75);
    };

    const change85 = (event: ChangeEvent<HTMLInputElement>) => {
        const num85 = parseInt(event.target.value);
        setValue85(num85);
    };

    const change95 = (event: ChangeEvent<HTMLInputElement>) => {
        const num95 = parseInt(event.target.value);
        setValue95(num95);
    };

    //column 6 change handlers
    const change16 = (event: ChangeEvent<HTMLInputElement>) => {
        const num16 = parseInt(event.target.value);
        setValue16(num16);
    };

    const change26 = (event: ChangeEvent<HTMLInputElement>) => {
        const num26 = parseInt(event.target.value);
        setValue26(num26);
    };

    const change36 = (event: ChangeEvent<HTMLInputElement>) => {
        const num36 = parseInt(event.target.value);
        setValue36(num36);
    };

    const change46 = (event: ChangeEvent<HTMLInputElement>) => {
        const num46 = parseInt(event.target.value);
        setValue46(num46);
    };

    const change56 = (event: ChangeEvent<HTMLInputElement>) => {
        const num56 = parseInt(event.target.value);
        setValue56(num56);
    };

    const change66 = (event: ChangeEvent<HTMLInputElement>) => {
        const num66 = parseInt(event.target.value);
        setValue66(num66);
    };

    const change76 = (event: ChangeEvent<HTMLInputElement>) => {
        const num76 = parseInt(event.target.value);
        setValue76(num76);
    };

    const change86 = (event: ChangeEvent<HTMLInputElement>) => {
        const num86 = parseInt(event.target.value);
        setValue86(num86);
    };

    const change96 = (event: ChangeEvent<HTMLInputElement>) => {
        const num96 = parseInt(event.target.value);
        setValue96(num96);
    };

    //column 7 change handlers
    const change17 = (event: ChangeEvent<HTMLInputElement>) => {
        const num17 = parseInt(event.target.value);
        setValue17(num17);
    };

    const change27 = (event: ChangeEvent<HTMLInputElement>) => {
        const num27 = parseInt(event.target.value);
        setValue27(num27);
    };

    const change37 = (event: ChangeEvent<HTMLInputElement>) => {
        const num37 = parseInt(event.target.value);
        setValue37(num37);
    };

    const change47 = (event: ChangeEvent<HTMLInputElement>) => {
        const num47 = parseInt(event.target.value);
        setValue47(num47);
    };

    const change57 = (event: ChangeEvent<HTMLInputElement>) => {
        const num57 = parseInt(event.target.value);
        setValue57(num57);
    };

    const change67 = (event: ChangeEvent<HTMLInputElement>) => {
        const num67 = parseInt(event.target.value);
        setValue67(num67);
    };

    const change77 = (event: ChangeEvent<HTMLInputElement>) => {
        const num77 = parseInt(event.target.value);
        setValue77(num77);
    };

    const change87 = (event: ChangeEvent<HTMLInputElement>) => {
        const num87 = parseInt(event.target.value);
        setValue87(num87);
    };

    const change97 = (event: ChangeEvent<HTMLInputElement>) => {
        const num97 = parseInt(event.target.value);
        setValue97(num97);
    };

    //column 8 change handlers
    const change18 = (event: ChangeEvent<HTMLInputElement>) => {
        const num18 = parseInt(event.target.value);
        setValue18(num18);
    };

    const change28 = (event: ChangeEvent<HTMLInputElement>) => {
        const num28 = parseInt(event.target.value);
        setValue28(num28);
    };

    const change38 = (event: ChangeEvent<HTMLInputElement>) => {
        const num38 = parseInt(event.target.value);
        setValue38(num38);
    };

    const change48 = (event: ChangeEvent<HTMLInputElement>) => {
        const num48 = parseInt(event.target.value);
        setValue48(num48);
    };

    const change58 = (event: ChangeEvent<HTMLInputElement>) => {
        const num58 = parseInt(event.target.value);
        setValue58(num58);
    };

    const change68 = (event: ChangeEvent<HTMLInputElement>) => {
        const num68 = parseInt(event.target.value);
        setValue68(num68);
    };

    const change78 = (event: ChangeEvent<HTMLInputElement>) => {
        const num78 = parseInt(event.target.value);
        setValue78(num78);
    };

    const change88 = (event: ChangeEvent<HTMLInputElement>) => {
        const num88 = parseInt(event.target.value);
        setValue88(num88);
    };

    const change98 = (event: ChangeEvent<HTMLInputElement>) => {
        const num98 = parseInt(event.target.value);
        setValue98(num98);
    };

    //column 9 change handlers
    const change19 = (event: ChangeEvent<HTMLInputElement>) => {
        const num19 = parseInt(event.target.value);
        setValue19(num19);
    };

    const change29 = (event: ChangeEvent<HTMLInputElement>) => {
        const num29 = parseInt(event.target.value);
        setValue29(num29);
    };

    const change39 = (event: ChangeEvent<HTMLInputElement>) => {
        const num39 = parseInt(event.target.value);
        setValue39(num39);
    };

    const change49 = (event: ChangeEvent<HTMLInputElement>) => {
        const num49 = parseInt(event.target.value);
        setValue49(num49);
    };

    const change59 = (event: ChangeEvent<HTMLInputElement>) => {
        const num59 = parseInt(event.target.value);
        setValue59(num59);
    };

    const change69 = (event: ChangeEvent<HTMLInputElement>) => {
        const num69 = parseInt(event.target.value);
        setValue69(num69);
    };

    const change79 = (event: ChangeEvent<HTMLInputElement>) => {
        const num79 = parseInt(event.target.value);
        setValue79(num79);
    };

    const change89 = (event: ChangeEvent<HTMLInputElement>) => {
        const num89 = parseInt(event.target.value);
        setValue89(num89);
    };

    const change99 = (event: ChangeEvent<HTMLInputElement>) => {
        const num99 = parseInt(event.target.value);
        setValue99(num99);
    };

    //column 10 change handlers
    const change110 = (event: ChangeEvent<HTMLInputElement>) => {
        const num110 = parseInt(event.target.value);
        setValue110(num110);
    };

    const change210 = (event: ChangeEvent<HTMLInputElement>) => {
        const num210 = parseInt(event.target.value);
        setValue210(num210);
    };

    const change310 = (event: ChangeEvent<HTMLInputElement>) => {
        const num310 = parseInt(event.target.value);
        setValue310(num310);
    };

    const change410 = (event: ChangeEvent<HTMLInputElement>) => {
        const num410 = parseInt(event.target.value);
        setValue410(num410);
    };

    const change510 = (event: ChangeEvent<HTMLInputElement>) => {
        const num510 = parseInt(event.target.value);
        setValue510(num510);
    };

    const change610 = (event: ChangeEvent<HTMLInputElement>) => {
        const num610 = parseInt(event.target.value);
        setValue610(num610);
    };

    const change710 = (event: ChangeEvent<HTMLInputElement>) => {
        const num710 = parseInt(event.target.value);
        setValue710(num710);
    };

    const change810 = (event: ChangeEvent<HTMLInputElement>) => {
        const num810 = parseInt(event.target.value);
        setValue810(num810);
    };

    const change910 = (event: ChangeEvent<HTMLInputElement>) => {
        const num910 = parseInt(event.target.value);
        setValue910(num910);
    };

    //column 11 change handlers
    const change111 = (event: ChangeEvent<HTMLInputElement>) => {
        const num111 = parseInt(event.target.value);
        setValue111(num111);
    };

    const change211 = (event: ChangeEvent<HTMLInputElement>) => {
        const num211 = parseInt(event.target.value);
        setValue211(num211);
    };

    const change311 = (event: ChangeEvent<HTMLInputElement>) => {
        const num311 = parseInt(event.target.value);
        setValue311(num311);
    };

    const change411 = (event: ChangeEvent<HTMLInputElement>) => {
        const num411 = parseInt(event.target.value);
        setValue411(num411);
    };

    const change511 = (event: ChangeEvent<HTMLInputElement>) => {
        const num511 = parseInt(event.target.value);
        setValue511(num511);
    };

    const change611 = (event: ChangeEvent<HTMLInputElement>) => {
        const num611 = parseInt(event.target.value);
        setValue611(num611);
    };

    const change711 = (event: ChangeEvent<HTMLInputElement>) => {
        const num711 = parseInt(event.target.value);
        setValue711(num711);
    };

    const change811 = (event: ChangeEvent<HTMLInputElement>) => {
        const num811 = parseInt(event.target.value);
        setValue811(num811);
    };

    const change911 = (event: ChangeEvent<HTMLInputElement>) => {
        const num911 = parseInt(event.target.value);
        setValue911(num911);
    };

    //column 12 change handlers
    const change112 = (event: ChangeEvent<HTMLInputElement>) => {
        const num112 = parseInt(event.target.value);
        setValue112(num112);
    };

    const change212 = (event: ChangeEvent<HTMLInputElement>) => {
        const num212 = parseInt(event.target.value);
        setValue212(num212);
    };

    const change312 = (event: ChangeEvent<HTMLInputElement>) => {
        const num312 = parseInt(event.target.value);
        setValue312(num312);
    };

    const change412 = (event: ChangeEvent<HTMLInputElement>) => {
        const num412 = parseInt(event.target.value);
        setValue412(num412);
    };

    const change512 = (event: ChangeEvent<HTMLInputElement>) => {
        const num512 = parseInt(event.target.value);
        setValue512(num512);
    };

    const change612 = (event: ChangeEvent<HTMLInputElement>) => {
        const num612 = parseInt(event.target.value);
        setValue612(num612);
    };

    const change712 = (event: ChangeEvent<HTMLInputElement>) => {
        const num712 = parseInt(event.target.value);
        setValue712(num712);
    };

    const change812 = (event: ChangeEvent<HTMLInputElement>) => {
        const num812 = parseInt(event.target.value);
        setValue812(num812);
    };

    const change912 = (event: ChangeEvent<HTMLInputElement>) => {
        const num912 = parseInt(event.target.value);
        setValue912(num912);
    };

    //column 13 change handlers
    const change113 = (event: ChangeEvent<HTMLInputElement>) => {
        const num113 = parseInt(event.target.value);
        setValue113(num113);
    };

    const change213 = (event: ChangeEvent<HTMLInputElement>) => {
        const num213 = parseInt(event.target.value);
        setValue213(num213);
    };

    const change313 = (event: ChangeEvent<HTMLInputElement>) => {
        const num313 = parseInt(event.target.value);
        setValue313(num313);
    };

    const change413 = (event: ChangeEvent<HTMLInputElement>) => {
        const num413 = parseInt(event.target.value);
        setValue413(num413);
    };

    const change513 = (event: ChangeEvent<HTMLInputElement>) => {
        const num513 = parseInt(event.target.value);
        setValue513(num513);
    };

    const change613 = (event: ChangeEvent<HTMLInputElement>) => {
        const num613 = parseInt(event.target.value);
        setValue613(num613);
    };

    const change713 = (event: ChangeEvent<HTMLInputElement>) => {
        const num713 = parseInt(event.target.value);
        setValue713(num713);
    };

    const change813 = (event: ChangeEvent<HTMLInputElement>) => {
        const num813 = parseInt(event.target.value);
        setValue813(num813);
    };

    const change913 = (event: ChangeEvent<HTMLInputElement>) => {
        const num913 = parseInt(event.target.value);
        setValue913(num913);
    };

    //column 14 change handlers
    const change114 = (event: ChangeEvent<HTMLInputElement>) => {
        const num114 = parseInt(event.target.value);
        setValue114(num114);
    };

    const change214 = (event: ChangeEvent<HTMLInputElement>) => {
        const num214 = parseInt(event.target.value);
        setValue214(num214);
    };

    const change314 = (event: ChangeEvent<HTMLInputElement>) => {
        const num314 = parseInt(event.target.value);
        setValue314(num314);
    };

    const change414 = (event: ChangeEvent<HTMLInputElement>) => {
        const num414 = parseInt(event.target.value);
        setValue414(num414);
    };

    const change514 = (event: ChangeEvent<HTMLInputElement>) => {
        const num514 = parseInt(event.target.value);
        setValue514(num514);
    };

    const change614 = (event: ChangeEvent<HTMLInputElement>) => {
        const num614 = parseInt(event.target.value);
        setValue614(num614);
    };

    const change714 = (event: ChangeEvent<HTMLInputElement>) => {
        const num714 = parseInt(event.target.value);
        setValue714(num714);
    };

    const change814 = (event: ChangeEvent<HTMLInputElement>) => {
        const num814 = parseInt(event.target.value);
        setValue814(num814);
    };

    const change914 = (event: ChangeEvent<HTMLInputElement>) => {
        const num914 = parseInt(event.target.value);
        setValue914(num914);
    };

    //column 15 change handlers
    const change115 = (event: ChangeEvent<HTMLInputElement>) => {
        const num115 = parseInt(event.target.value);
        setValue115(num115);
    };

    const change215 = (event: ChangeEvent<HTMLInputElement>) => {
        const num215 = parseInt(event.target.value);
        setValue215(num215);
    };

    const change315 = (event: ChangeEvent<HTMLInputElement>) => {
        const num315 = parseInt(event.target.value);
        setValue315(num315);
    };

    const change415 = (event: ChangeEvent<HTMLInputElement>) => {
        const num415 = parseInt(event.target.value);
        setValue415(num415);
    };

    const change515 = (event: ChangeEvent<HTMLInputElement>) => {
        const num515 = parseInt(event.target.value);
        setValue515(num515);
    };

    const change615 = (event: ChangeEvent<HTMLInputElement>) => {
        const num615 = parseInt(event.target.value);
        setValue615(num615);
    };

    const change715 = (event: ChangeEvent<HTMLInputElement>) => {
        const num715 = parseInt(event.target.value);
        setValue715(num715);
    };

    const change815 = (event: ChangeEvent<HTMLInputElement>) => {
        const num815 = parseInt(event.target.value);
        setValue815(num815);
    };

    const change915 = (event: ChangeEvent<HTMLInputElement>) => {
        const num915 = parseInt(event.target.value);
        setValue915(num915);
    };

    //column 16 change handlers
    const change116 = (event: ChangeEvent<HTMLInputElement>) => {
        const num116 = parseInt(event.target.value);
        setValue116(num116);
    };

    const change216 = (event: ChangeEvent<HTMLInputElement>) => {
        const num216 = parseInt(event.target.value);
        setValue216(num216);
    };

    const change316 = (event: ChangeEvent<HTMLInputElement>) => {
        const num316 = parseInt(event.target.value);
        setValue316(num316);
    };

    const change416 = (event: ChangeEvent<HTMLInputElement>) => {
        const num416 = parseInt(event.target.value);
        setValue416(num416);
    };

    const change516 = (event: ChangeEvent<HTMLInputElement>) => {
        const num516 = parseInt(event.target.value);
        setValue516(num516);
    };

    const change616 = (event: ChangeEvent<HTMLInputElement>) => {
        const num616 = parseInt(event.target.value);
        setValue616(num616);
    };

    const change716 = (event: ChangeEvent<HTMLInputElement>) => {
        const num716 = parseInt(event.target.value);
        setValue716(num716);
    };

    const change816 = (event: ChangeEvent<HTMLInputElement>) => {
        const num816 = parseInt(event.target.value);
        setValue816(num816);
    };

    const change916 = (event: ChangeEvent<HTMLInputElement>) => {
        const num916 = parseInt(event.target.value);
        setValue916(num916);
    };

    //column 17 change handlers
    const change117 = (event: ChangeEvent<HTMLInputElement>) => {
        const num117 = parseInt(event.target.value);
        setValue117(num117);
    };

    const change217 = (event: ChangeEvent<HTMLInputElement>) => {
        const num217 = parseInt(event.target.value);
        setValue217(num217);
    };

    const change317 = (event: ChangeEvent<HTMLInputElement>) => {
        const num317 = parseInt(event.target.value);
        setValue317(num317);
    };

    const change417 = (event: ChangeEvent<HTMLInputElement>) => {
        const num417 = parseInt(event.target.value);
        setValue417(num417);
    };

    const change517 = (event: ChangeEvent<HTMLInputElement>) => {
        const num517 = parseInt(event.target.value);
        setValue517(num517);
    };

    const change617 = (event: ChangeEvent<HTMLInputElement>) => {
        const num617 = parseInt(event.target.value);
        setValue617(num617);
    };

    const change717 = (event: ChangeEvent<HTMLInputElement>) => {
        const num717 = parseInt(event.target.value);
        setValue717(num717);
    };

    const change817 = (event: ChangeEvent<HTMLInputElement>) => {
        const num817 = parseInt(event.target.value);
        setValue817(num817);
    };

    const change917 = (event: ChangeEvent<HTMLInputElement>) => {
        const num917 = parseInt(event.target.value);
        setValue917(num917);
    };

    //column 18 change handlers
    const change118 = (event: ChangeEvent<HTMLInputElement>) => {
        const num118 = parseInt(event.target.value);
        setValue118(num118);
    };

    const change218 = (event: ChangeEvent<HTMLInputElement>) => {
        const num218 = parseInt(event.target.value);
        setValue218(num218);
    };

    const change318 = (event: ChangeEvent<HTMLInputElement>) => {
        const num318 = parseInt(event.target.value);
        setValue318(num318);
    };

    const change418 = (event: ChangeEvent<HTMLInputElement>) => {
        const num418 = parseInt(event.target.value);
        setValue418(num418);
    };

    const change518 = (event: ChangeEvent<HTMLInputElement>) => {
        const num518 = parseInt(event.target.value);
        setValue518(num518);
    };

    const change618 = (event: ChangeEvent<HTMLInputElement>) => {
        const num618 = parseInt(event.target.value);
        setValue618(num618);
    };

    const change718 = (event: ChangeEvent<HTMLInputElement>) => {
        const num718 = parseInt(event.target.value);
        setValue718(num718);
    };

    const change818 = (event: ChangeEvent<HTMLInputElement>) => {
        const num818 = parseInt(event.target.value);
        setValue818(num818);
    };

    const change918 = (event: ChangeEvent<HTMLInputElement>) => {
        const num918 = parseInt(event.target.value);
        setValue918(num918);
    };

    //column 19 change handlers
    const change119 = (event: ChangeEvent<HTMLInputElement>) => {
        const num119 = parseInt(event.target.value);
        setValue119(num119);
    };

    const change219 = (event: ChangeEvent<HTMLInputElement>) => {
        const num219 = parseInt(event.target.value);
        setValue219(num219);
    };

    const change319 = (event: ChangeEvent<HTMLInputElement>) => {
        const num319 = parseInt(event.target.value);
        setValue319(num319);
    };

    const change419 = (event: ChangeEvent<HTMLInputElement>) => {
        const num419 = parseInt(event.target.value);
        setValue419(num419);
    };

    const change519 = (event: ChangeEvent<HTMLInputElement>) => {
        const num519 = parseInt(event.target.value);
        setValue519(num519);
    };

    const change619 = (event: ChangeEvent<HTMLInputElement>) => {
        const num619 = parseInt(event.target.value);
        setValue619(num619);
    };

    const change719 = (event: ChangeEvent<HTMLInputElement>) => {
        const num719 = parseInt(event.target.value);
        setValue719(num719);
    };

    const change819 = (event: ChangeEvent<HTMLInputElement>) => {
        const num819 = parseInt(event.target.value);
        setValue819(num819);
    };

    const change919 = (event: ChangeEvent<HTMLInputElement>) => {
        const num919 = parseInt(event.target.value);
        setValue919(num919);
    };

    //column 20 change handlers
    const change120 = (event: ChangeEvent<HTMLInputElement>) => {
        const num120 = parseInt(event.target.value);
        setValue120(num120);
    };

    const change220 = (event: ChangeEvent<HTMLInputElement>) => {
        const num220 = parseInt(event.target.value);
        setValue220(num220);
    };

    const change320 = (event: ChangeEvent<HTMLInputElement>) => {
        const num320 = parseInt(event.target.value);
        setValue320(num320);
    };

    const change420 = (event: ChangeEvent<HTMLInputElement>) => {
        const num420 = parseInt(event.target.value);
        setValue420(num420);
    };

    const change520 = (event: ChangeEvent<HTMLInputElement>) => {
        const num520 = parseInt(event.target.value);
        setValue520(num520);
    };

    const change620 = (event: ChangeEvent<HTMLInputElement>) => {
        const num620 = parseInt(event.target.value);
        setValue620(num620);
    };

    const change720 = (event: ChangeEvent<HTMLInputElement>) => {
        const num720 = parseInt(event.target.value);
        setValue720(num720);
    };

    const change820 = (event: ChangeEvent<HTMLInputElement>) => {
        const num820 = parseInt(event.target.value);
        setValue820(num820);
    };

    const change920 = (event: ChangeEvent<HTMLInputElement>) => {
        const num920 = parseInt(event.target.value);
        setValue920(num920);
    };

    const readMatrix = () => {
        const column1 = [value11, value21, value31, value41, value51, value61, value71, value81, value91];
        const column2 = [value12, value22, value32, value42, value52, value62, value72, value82, value92];
        const column3 = [value13, value23, value33, value43, value53, value63, value73, value83, value93];
        const column4 = [value14, value24, value34, value44, value54, value64, value74, value84, value94];
        const column5 = [value15, value25, value35, value45, value55, value65, value75, value85, value95];
        const column6 = [value16, value26, value36, value46, value56, value66, value76, value86, value96];
        const column7 = [value17, value27, value37, value47, value57, value67, value77, value87, value97];
        const column8 = [value18, value28, value38, value48, value58, value68, value78, value88, value98];
        const column9 = [value19, value29, value39, value49, value59, value69, value79, value89, value99];
        const column10 = [value110, value210, value310, value410, value510, value610, value710, value810, value910];
        const column11 = [value111, value211, value311, value411, value511, value611, value711, value811, value911];
        const column12 = [value112, value212, value312, value412, value512, value612, value712, value812, value912];
        const column13 = [value113, value213, value313, value413, value513, value613, value713, value813, value913];
        const column14 = [value114, value214, value314, value414, value514, value614, value714, value814, value914];
        const column15 = [value115, value215, value315, value415, value515, value615, value715, value815, value915];
        const column16 = [value116, value216, value316, value416, value516, value616, value716, value816, value916];
        const column17 = [value117, value217, value317, value417, value517, value617, value717, value817, value917];
        const column18 = [value118, value218, value318, value418, value518, value618, value718, value818, value918];
        const column19 = [value119, value219, value319, value419, value519, value619, value719, value819, value919];
        const column20 = [value120, value220, value320, value420, value520, value620, value720, value820, value920];

        // console.log('column 1: ', column1);
        // console.log('column 2: ', column2);
        // console.log('column 3: ', column3);
        // console.log('column 4: ', column4);
        // console.log('column 5: ', column5);
        // console.log('column 6: ', column6);
        // console.log('column 7: ', column7);
        // console.log('column 8: ', column8);
        // console.log('column 9: ', column9);
        // console.log('column 10: ', column10);
        // console.log('column 11: ', column11);
        // console.log('column 12: ', column12);
        // console.log('column 13: ', column13);
        // console.log('column 14: ', column14);
        // console.log('column 15: ', column15);
        // console.log('column 16: ', column16);
        // console.log('column 17: ', column17);
        // console.log('column 18: ', column18);
        // console.log('column 19: ', column19);
        // console.log('column 20: ', column20);

        return [
            column1,
            column2,
            column3,
            column4,
            column5,
            column6,
            column7,
            column8,
            column9,
            column10,
            column11,
            column12,
            column13,
            column14,
            column15,
            column16,
            column17,
            column18,
            column19,
            column20
        ];
    };

    // ******* GENERIC *******

    // column 1 states
    const [generic11, setGeneric11] = useState<number | null>();
    const [generic21, setGeneric21] = useState<number | null>();
    const [generic31, setGeneric31] = useState<number | null>();
    const [generic41, setGeneric41] = useState<number | null>();
    const [generic51, setGeneric51] = useState<number | null>();
    const [generic61, setGeneric61] = useState<number | null>();
    const [generic71, setGeneric71] = useState<number | null>();
    const [generic81, setGeneric81] = useState<number | null>();
    const [generic91, setGeneric91] = useState<number | null>();

    // column 2 states
    const [generic12, setGeneric12] = useState<number | null>();
    const [generic22, setGeneric22] = useState<number | null>();
    const [generic32, setGeneric32] = useState<number | null>();
    const [generic42, setGeneric42] = useState<number | null>();
    const [generic52, setGeneric52] = useState<number | null>();
    const [generic62, setGeneric62] = useState<number | null>();
    const [generic72, setGeneric72] = useState<number | null>();
    const [generic82, setGeneric82] = useState<number | null>();
    const [generic92, setGeneric92] = useState<number | null>();

    // column 3 states
    const [generic13, setGeneric13] = useState<number | null>();
    const [generic23, setGeneric23] = useState<number | null>();
    const [generic33, setGeneric33] = useState<number | null>();
    const [generic43, setGeneric43] = useState<number | null>();
    const [generic53, setGeneric53] = useState<number | null>();
    const [generic63, setGeneric63] = useState<number | null>();
    const [generic73, setGeneric73] = useState<number | null>();
    const [generic83, setGeneric83] = useState<number | null>();
    const [generic93, setGeneric93] = useState<number | null>();

    // column 4 states
    const [generic14, setGeneric14] = useState<number | null>();
    const [generic24, setGeneric24] = useState<number | null>();
    const [generic34, setGeneric34] = useState<number | null>();
    const [generic44, setGeneric44] = useState<number | null>();
    const [generic54, setGeneric54] = useState<number | null>();
    const [generic64, setGeneric64] = useState<number | null>();
    const [generic74, setGeneric74] = useState<number | null>();
    const [generic84, setGeneric84] = useState<number | null>();
    const [generic94, setGeneric94] = useState<number | null>();

    //column 1 change handlers
    const changeGeneric11 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric11 = parseInt(event.target.value);
        setGeneric11(numGeneric11);
    };

    const changeGeneric21 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric21 = parseInt(event.target.value);
        setGeneric21(numGeneric21);
    };

    const changeGeneric31 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric31 = parseInt(event.target.value);
        setGeneric31(numGeneric31);
    };

    const changeGeneric41 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric41 = parseInt(event.target.value);
        setGeneric41(numGeneric41);
    };

    const changeGeneric51 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric51 = parseInt(event.target.value);
        setGeneric51(numGeneric51);
    };

    const changeGeneric61 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric61 = parseInt(event.target.value);
        setGeneric61(numGeneric61);
    };

    const changeGeneric71 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric71 = parseInt(event.target.value);
        setGeneric71(numGeneric71);
    };

    const changeGeneric81 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric81 = parseInt(event.target.value);
        setGeneric81(numGeneric81);
    };

    const changeGeneric91 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric91 = parseInt(event.target.value);
        setGeneric91(numGeneric91);
    };

    //column 2 change handlers
    const changeGeneric12 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric12 = parseInt(event.target.value);
        setGeneric12(numGeneric12);
    };

    const changeGeneric22 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric22 = parseInt(event.target.value);
        setGeneric22(numGeneric22);
    };

    const changeGeneric32 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric32 = parseInt(event.target.value);
        setGeneric32(numGeneric32);
    };

    const changeGeneric42 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric42 = parseInt(event.target.value);
        setGeneric42(numGeneric42);
    };

    const changeGeneric52 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric52 = parseInt(event.target.value);
        setGeneric52(numGeneric52);
    };

    const changeGeneric62 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric62 = parseInt(event.target.value);
        setGeneric62(numGeneric62);
    };

    const changeGeneric72 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric72 = parseInt(event.target.value);
        setGeneric72(numGeneric72);
    };

    const changeGeneric82 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric82 = parseInt(event.target.value);
        setGeneric82(numGeneric82);
    };

    const changeGeneric92 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric92 = parseInt(event.target.value);
        setGeneric92(numGeneric92);
    };

    //column 3 change handlers
    const changeGeneric13 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric13 = parseInt(event.target.value);
        setGeneric13(numGeneric13);
    };

    const changeGeneric23 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric23 = parseInt(event.target.value);
        setGeneric23(numGeneric23);
    };

    const changeGeneric33 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric33 = parseInt(event.target.value);
        setGeneric33(numGeneric33);
    };

    const changeGeneric43 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric43 = parseInt(event.target.value);
        setGeneric43(numGeneric43);
    };

    const changeGeneric53 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric53 = parseInt(event.target.value);
        setGeneric53(numGeneric53);
    };

    const changeGeneric63 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric63 = parseInt(event.target.value);
        setGeneric63(numGeneric63);
    };

    const changeGeneric73 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric73 = parseInt(event.target.value);
        setGeneric73(numGeneric73);
    };

    const changeGeneric83 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric83 = parseInt(event.target.value);
        setGeneric83(numGeneric83);
    };

    const changeGeneric93 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric93 = parseInt(event.target.value);
        setGeneric93(numGeneric93);
    };

    //column 4 change handlers
    const changeGeneric14 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric14 = parseInt(event.target.value);
        setGeneric14(numGeneric14);
    };

    const changeGeneric24 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric24 = parseInt(event.target.value);
        setGeneric24(numGeneric24);
    };

    const changeGeneric34 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric34 = parseInt(event.target.value);
        setGeneric34(numGeneric34);
    };

    const changeGeneric44 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric44 = parseInt(event.target.value);
        setGeneric44(numGeneric44);
    };

    const changeGeneric54 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric54 = parseInt(event.target.value);
        setGeneric54(numGeneric54);
    };

    const changeGeneric64 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric64 = parseInt(event.target.value);
        setGeneric64(numGeneric64);
    };

    const changeGeneric74 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric74 = parseInt(event.target.value);
        setGeneric74(numGeneric74);
    };

    const changeGeneric84 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric84 = parseInt(event.target.value);
        setGeneric84(numGeneric84);
    };

    const changeGeneric94 = (event: ChangeEvent<HTMLInputElement>) => {
        const numGeneric94 = parseInt(event.target.value);
        setGeneric94(numGeneric94);
    };

    const readGeneric = () => {
        const columnGeneric1 = [generic11, generic21, generic31, generic41, generic51, generic61, generic71, generic81, generic91];
        const columnGeneric2 = [generic12, generic22, generic32, generic42, generic52, generic62, generic72, generic82, generic92];
        const columnGeneric3 = [generic13, generic23, generic33, generic43, generic53, generic63, generic73, generic83, generic93];
        const columnGeneric4 = [generic14, generic24, generic34, generic44, generic54, generic64, generic74, generic84, generic94];

        // console.log('generic column 1: ', columnGeneric1);
        // console.log('generic column 2: ', columnGeneric2);
        // console.log('generic column 3: ', columnGeneric3);
        // console.log('generic column 4: ', columnGeneric4);

        return [columnGeneric1, columnGeneric2, columnGeneric3, columnGeneric4];
    };

    //*********** VERTICAL CHECK ***********

    // matrix column 1 x generic columns states
    const [numberOfCoincidences1x1, setNumberOfCoincidences1x1] = useState(0);
    const [numberOfCoincidences1x2, setNumberOfCoincidences1x2] = useState(0);
    const [numberOfCoincidences1x3, setNumberOfCoincidences1x3] = useState(0);
    const [numberOfCoincidences1x4, setNumberOfCoincidences1x4] = useState(0);

    // matrix column 2 x generic columns states
    const [numberOfCoincidences2x1, setNumberOfCoincidences2x1] = useState(0);
    const [numberOfCoincidences2x2, setNumberOfCoincidences2x2] = useState(0);
    const [numberOfCoincidences2x3, setNumberOfCoincidences2x3] = useState(0);
    const [numberOfCoincidences2x4, setNumberOfCoincidences2x4] = useState(0);

    // matrix column 3 x generic columns states
    const [numberOfCoincidences3x1, setNumberOfCoincidences3x1] = useState(0);
    const [numberOfCoincidences3x2, setNumberOfCoincidences3x2] = useState(0);
    const [numberOfCoincidences3x3, setNumberOfCoincidences3x3] = useState(0);
    const [numberOfCoincidences3x4, setNumberOfCoincidences3x4] = useState(0);

    // matrix column 4 x generic columns states
    const [numberOfCoincidences4x1, setNumberOfCoincidences4x1] = useState(0);
    const [numberOfCoincidences4x2, setNumberOfCoincidences4x2] = useState(0);
    const [numberOfCoincidences4x3, setNumberOfCoincidences4x3] = useState(0);
    const [numberOfCoincidences4x4, setNumberOfCoincidences4x4] = useState(0);

    // matrix column 5 x generic columns states
    const [numberOfCoincidences5x1, setNumberOfCoincidences5x1] = useState(0);
    const [numberOfCoincidences5x2, setNumberOfCoincidences5x2] = useState(0);
    const [numberOfCoincidences5x3, setNumberOfCoincidences5x3] = useState(0);
    const [numberOfCoincidences5x4, setNumberOfCoincidences5x4] = useState(0);

    // matrix column 6 x generic columns states
    const [numberOfCoincidences6x1, setNumberOfCoincidences6x1] = useState(0);
    const [numberOfCoincidences6x2, setNumberOfCoincidences6x2] = useState(0);
    const [numberOfCoincidences6x3, setNumberOfCoincidences6x3] = useState(0);
    const [numberOfCoincidences6x4, setNumberOfCoincidences6x4] = useState(0);

    // matrix column 7 x generic columns states
    const [numberOfCoincidences7x1, setNumberOfCoincidences7x1] = useState(0);
    const [numberOfCoincidences7x2, setNumberOfCoincidences7x2] = useState(0);
    const [numberOfCoincidences7x3, setNumberOfCoincidences7x3] = useState(0);
    const [numberOfCoincidences7x4, setNumberOfCoincidences7x4] = useState(0);

    // matrix column 8 x generic columns states
    const [numberOfCoincidences8x1, setNumberOfCoincidences8x1] = useState(0);
    const [numberOfCoincidences8x2, setNumberOfCoincidences8x2] = useState(0);
    const [numberOfCoincidences8x3, setNumberOfCoincidences8x3] = useState(0);
    const [numberOfCoincidences8x4, setNumberOfCoincidences8x4] = useState(0);

    // matrix column 9 x generic columns states
    const [numberOfCoincidences9x1, setNumberOfCoincidences9x1] = useState(0);
    const [numberOfCoincidences9x2, setNumberOfCoincidences9x2] = useState(0);
    const [numberOfCoincidences9x3, setNumberOfCoincidences9x3] = useState(0);
    const [numberOfCoincidences9x4, setNumberOfCoincidences9x4] = useState(0);

    // matrix column 10 x generic columns states
    const [numberOfCoincidences10x1, setNumberOfCoincidences10x1] = useState(0);
    const [numberOfCoincidences10x2, setNumberOfCoincidences10x2] = useState(0);
    const [numberOfCoincidences10x3, setNumberOfCoincidences10x3] = useState(0);
    const [numberOfCoincidences10x4, setNumberOfCoincidences10x4] = useState(0);

    // matrix column 11 x generic columns states
    const [numberOfCoincidences11x1, setNumberOfCoincidences11x1] = useState(0);
    const [numberOfCoincidences11x2, setNumberOfCoincidences11x2] = useState(0);
    const [numberOfCoincidences11x3, setNumberOfCoincidences11x3] = useState(0);
    const [numberOfCoincidences11x4, setNumberOfCoincidences11x4] = useState(0);

    // matrix column 12 x generic columns states
    const [numberOfCoincidences12x1, setNumberOfCoincidences12x1] = useState(0);
    const [numberOfCoincidences12x2, setNumberOfCoincidences12x2] = useState(0);
    const [numberOfCoincidences12x3, setNumberOfCoincidences12x3] = useState(0);
    const [numberOfCoincidences12x4, setNumberOfCoincidences12x4] = useState(0);

    // matrix column 13 x generic columns states
    const [numberOfCoincidences13x1, setNumberOfCoincidences13x1] = useState(0);
    const [numberOfCoincidences13x2, setNumberOfCoincidences13x2] = useState(0);
    const [numberOfCoincidences13x3, setNumberOfCoincidences13x3] = useState(0);
    const [numberOfCoincidences13x4, setNumberOfCoincidences13x4] = useState(0);

    // matrix column 14 x generic columns states
    const [numberOfCoincidences14x1, setNumberOfCoincidences14x1] = useState(0);
    const [numberOfCoincidences14x2, setNumberOfCoincidences14x2] = useState(0);
    const [numberOfCoincidences14x3, setNumberOfCoincidences14x3] = useState(0);
    const [numberOfCoincidences14x4, setNumberOfCoincidences14x4] = useState(0);

    // matrix column 15 x generic columns states
    const [numberOfCoincidences15x1, setNumberOfCoincidences15x1] = useState(0);
    const [numberOfCoincidences15x2, setNumberOfCoincidences15x2] = useState(0);
    const [numberOfCoincidences15x3, setNumberOfCoincidences15x3] = useState(0);
    const [numberOfCoincidences15x4, setNumberOfCoincidences15x4] = useState(0);

    // matrix column 16 x generic columns states
    const [numberOfCoincidences16x1, setNumberOfCoincidences16x1] = useState(0);
    const [numberOfCoincidences16x2, setNumberOfCoincidences16x2] = useState(0);
    const [numberOfCoincidences16x3, setNumberOfCoincidences16x3] = useState(0);
    const [numberOfCoincidences16x4, setNumberOfCoincidences16x4] = useState(0);

    // matrix column 17 x generic columns states
    const [numberOfCoincidences17x1, setNumberOfCoincidences17x1] = useState(0);
    const [numberOfCoincidences17x2, setNumberOfCoincidences17x2] = useState(0);
    const [numberOfCoincidences17x3, setNumberOfCoincidences17x3] = useState(0);
    const [numberOfCoincidences17x4, setNumberOfCoincidences17x4] = useState(0);

    // matrix column 18 x generic columns states
    const [numberOfCoincidences18x1, setNumberOfCoincidences18x1] = useState(0);
    const [numberOfCoincidences18x2, setNumberOfCoincidences18x2] = useState(0);
    const [numberOfCoincidences18x3, setNumberOfCoincidences18x3] = useState(0);
    const [numberOfCoincidences18x4, setNumberOfCoincidences18x4] = useState(0);

    // matrix column 19 x generic columns states
    const [numberOfCoincidences19x1, setNumberOfCoincidences19x1] = useState(0);
    const [numberOfCoincidences19x2, setNumberOfCoincidences19x2] = useState(0);
    const [numberOfCoincidences19x3, setNumberOfCoincidences19x3] = useState(0);
    const [numberOfCoincidences19x4, setNumberOfCoincidences19x4] = useState(0);

    // matrix column 20 x generic columns states
    const [numberOfCoincidences20x1, setNumberOfCoincidences20x1] = useState(0);
    const [numberOfCoincidences20x2, setNumberOfCoincidences20x2] = useState(0);
    const [numberOfCoincidences20x3, setNumberOfCoincidences20x3] = useState(0);
    const [numberOfCoincidences20x4, setNumberOfCoincidences20x4] = useState(0);

    const setCoincidencesToZero = () => {
        setNumberOfCoincidences1x1(0);
        setNumberOfCoincidences1x2(0);
        setNumberOfCoincidences1x3(0);
        setNumberOfCoincidences1x4(0);

        setNumberOfCoincidences2x1(0);
        setNumberOfCoincidences2x2(0);
        setNumberOfCoincidences2x3(0);
        setNumberOfCoincidences2x4(0);

        setNumberOfCoincidences3x1(0);
        setNumberOfCoincidences3x2(0);
        setNumberOfCoincidences3x3(0);
        setNumberOfCoincidences3x4(0);

        setNumberOfCoincidences4x1(0);
        setNumberOfCoincidences4x2(0);
        setNumberOfCoincidences4x3(0);
        setNumberOfCoincidences4x4(0);

        setNumberOfCoincidences5x1(0);
        setNumberOfCoincidences5x2(0);
        setNumberOfCoincidences5x3(0);
        setNumberOfCoincidences5x4(0);

        setNumberOfCoincidences6x1(0);
        setNumberOfCoincidences6x2(0);
        setNumberOfCoincidences6x3(0);
        setNumberOfCoincidences6x4(0);

        setNumberOfCoincidences7x1(0);
        setNumberOfCoincidences7x2(0);
        setNumberOfCoincidences7x3(0);
        setNumberOfCoincidences7x4(0);

        setNumberOfCoincidences8x1(0);
        setNumberOfCoincidences8x2(0);
        setNumberOfCoincidences8x3(0);
        setNumberOfCoincidences8x4(0);

        setNumberOfCoincidences9x1(0);
        setNumberOfCoincidences9x2(0);
        setNumberOfCoincidences9x3(0);
        setNumberOfCoincidences9x4(0);

        setNumberOfCoincidences10x1(0);
        setNumberOfCoincidences10x2(0);
        setNumberOfCoincidences10x3(0);
        setNumberOfCoincidences10x4(0);

        setNumberOfCoincidences11x1(0);
        setNumberOfCoincidences11x2(0);
        setNumberOfCoincidences11x3(0);
        setNumberOfCoincidences11x4(0);

        setNumberOfCoincidences12x1(0);
        setNumberOfCoincidences12x2(0);
        setNumberOfCoincidences12x3(0);
        setNumberOfCoincidences12x4(0);

        setNumberOfCoincidences13x1(0);
        setNumberOfCoincidences13x2(0);
        setNumberOfCoincidences13x3(0);
        setNumberOfCoincidences13x4(0);

        setNumberOfCoincidences14x1(0);
        setNumberOfCoincidences14x2(0);
        setNumberOfCoincidences14x3(0);
        setNumberOfCoincidences14x4(0);

        setNumberOfCoincidences15x1(0);
        setNumberOfCoincidences15x2(0);
        setNumberOfCoincidences15x3(0);
        setNumberOfCoincidences15x4(0);

        setNumberOfCoincidences16x1(0);
        setNumberOfCoincidences16x2(0);
        setNumberOfCoincidences16x3(0);
        setNumberOfCoincidences16x4(0);

        setNumberOfCoincidences17x1(0);
        setNumberOfCoincidences17x2(0);
        setNumberOfCoincidences17x3(0);
        setNumberOfCoincidences17x4(0);

        setNumberOfCoincidences18x1(0);
        setNumberOfCoincidences18x2(0);
        setNumberOfCoincidences18x3(0);
        setNumberOfCoincidences18x4(0);

        setNumberOfCoincidences19x1(0);
        setNumberOfCoincidences19x2(0);
        setNumberOfCoincidences19x3(0);
        setNumberOfCoincidences19x4(0);

        setNumberOfCoincidences20x1(0);
        setNumberOfCoincidences20x2(0);
        setNumberOfCoincidences20x3(0);
        setNumberOfCoincidences20x4(0);
    };

    const column1Function = (
        column1Arr: (number | null | undefined)[],
        generic1Arr: (number | null | undefined)[],
        generic2Arr: (number | null | undefined)[],
        generic3Arr: (number | null | undefined)[],
        generic4Arr: (number | null | undefined)[]
    ) => {
        // 1 x 1
        if (column1Arr[0] === generic1Arr[0] && column1Arr[0] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[1] === generic1Arr[1] && column1Arr[1] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[2] === generic1Arr[2] && column1Arr[2] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[3] === generic1Arr[3] && column1Arr[3] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[4] === generic1Arr[4] && column1Arr[4] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[5] === generic1Arr[5] && column1Arr[5] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[6] === generic1Arr[6] && column1Arr[6] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[7] === generic1Arr[7] && column1Arr[7] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[8] === generic1Arr[8] && column1Arr[8] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }

        // 1 x 2
        if (column1Arr[0] === generic2Arr[0] && column1Arr[0] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[1] === generic2Arr[1] && column1Arr[1] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[2] === generic2Arr[2] && column1Arr[2] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[3] === generic2Arr[3] && column1Arr[3] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[4] === generic2Arr[4] && column1Arr[4] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[5] === generic2Arr[5] && column1Arr[5] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[6] === generic2Arr[6] && column1Arr[6] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[7] === generic2Arr[7] && column1Arr[7] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[8] === generic2Arr[8] && column1Arr[8] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }

        // 1 x 3
        if (column1Arr[0] === generic3Arr[0] && column1Arr[0] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[1] === generic3Arr[1] && column1Arr[1] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[2] === generic3Arr[2] && column1Arr[2] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[3] === generic3Arr[3] && column1Arr[3] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[4] === generic3Arr[4] && column1Arr[4] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[5] === generic3Arr[5] && column1Arr[5] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[6] === generic3Arr[6] && column1Arr[6] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[7] === generic3Arr[7] && column1Arr[7] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[8] === generic3Arr[8] && column1Arr[8] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }

        // 1 x 4
        if (column1Arr[0] === generic4Arr[0] && column1Arr[0] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[1] === generic4Arr[1] && column1Arr[1] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[2] === generic4Arr[2] && column1Arr[2] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[3] === generic4Arr[3] && column1Arr[3] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[4] === generic4Arr[4] && column1Arr[4] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[5] === generic4Arr[5] && column1Arr[5] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[6] === generic4Arr[6] && column1Arr[6] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[7] === generic4Arr[7] && column1Arr[7] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[8] === generic4Arr[8] && column1Arr[8] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
    };

    const column2Function = (
        column2Arr: (number | null | undefined)[],
        generic1Arr: (number | null | undefined)[],
        generic2Arr: (number | null | undefined)[],
        generic3Arr: (number | null | undefined)[],
        generic4Arr: (number | null | undefined)[]
    ) => {
        // 2 x 1
        if (column2Arr[0] === generic1Arr[0] && column2Arr[0] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[1] === generic1Arr[1] && column2Arr[1] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[2] === generic1Arr[2] && column2Arr[2] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[3] === generic1Arr[3] && column2Arr[3] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[4] === generic1Arr[4] && column2Arr[4] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[5] === generic1Arr[5] && column2Arr[5] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[6] === generic1Arr[6] && column2Arr[6] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[7] === generic1Arr[7] && column2Arr[7] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[8] === generic1Arr[8] && column2Arr[8] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }

        // 2 x 2
        if (column2Arr[0] === generic2Arr[0] && column2Arr[0] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[1] === generic2Arr[1] && column2Arr[1] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[2] === generic2Arr[2] && column2Arr[2] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[3] === generic2Arr[3] && column2Arr[3] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[4] === generic2Arr[4] && column2Arr[4] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[5] === generic2Arr[5] && column2Arr[5] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[6] === generic2Arr[6] && column2Arr[6] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[7] === generic2Arr[7] && column2Arr[7] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[8] === generic2Arr[8] && column2Arr[8] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }

        // 2 x 3
        if (column2Arr[0] === generic3Arr[0] && column2Arr[0] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[1] === generic3Arr[1] && column2Arr[1] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[2] === generic3Arr[2] && column2Arr[2] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[3] === generic3Arr[3] && column2Arr[3] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[4] === generic3Arr[4] && column2Arr[4] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[5] === generic3Arr[5] && column2Arr[5] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[6] === generic3Arr[6] && column2Arr[6] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[7] === generic3Arr[7] && column2Arr[7] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[8] === generic3Arr[8] && column2Arr[8] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }

        // 2 x 4
        if (column2Arr[0] === generic4Arr[0] && column2Arr[0] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[1] === generic4Arr[1] && column2Arr[1] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[2] === generic4Arr[2] && column2Arr[2] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[3] === generic4Arr[3] && column2Arr[3] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[4] === generic4Arr[4] && column2Arr[4] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[5] === generic4Arr[5] && column2Arr[5] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[6] === generic4Arr[6] && column2Arr[6] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[7] === generic4Arr[7] && column2Arr[7] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[8] === generic4Arr[8] && column2Arr[8] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
    };

    const doCheckBtnHandler = () => {
        setCoincidencesToZero();
        let genericColumnsArr = readGeneric();
        let generic1Arr = genericColumnsArr[0];
        let generic2Arr = genericColumnsArr[1];
        let generic3Arr = genericColumnsArr[2];
        let generic4Arr = genericColumnsArr[3];

        let matrixColumnsArr = readMatrix();
        let column1Arr = matrixColumnsArr[0];
        let column2Arr = matrixColumnsArr[1];
        let column3Arr = matrixColumnsArr[2];
        let column4Arr = matrixColumnsArr[3];
        let column5Arr = matrixColumnsArr[4];
        let column6Arr = matrixColumnsArr[5];
        let column7Arr = matrixColumnsArr[6];
        let column8Arr = matrixColumnsArr[7];
        let column9Arr = matrixColumnsArr[8];
        let column10Arr = matrixColumnsArr[9];
        let column11Arr = matrixColumnsArr[10];
        let column12Arr = matrixColumnsArr[11];
        let column13Arr = matrixColumnsArr[12];
        let column14Arr = matrixColumnsArr[13];
        let column15Arr = matrixColumnsArr[14];
        let column16Arr = matrixColumnsArr[15];
        let column17Arr = matrixColumnsArr[16];
        let column18Arr = matrixColumnsArr[17];
        let column19Arr = matrixColumnsArr[18];
        let column20Arr = matrixColumnsArr[19];

        console.log('Generic columns: ', genericColumnsArr);
        console.log('Matrix columns: ', matrixColumnsArr);

        column1Function(column1Arr, generic1Arr, generic2Arr, generic3Arr, generic4Arr);
        column2Function(column2Arr, generic1Arr, generic2Arr, generic3Arr, generic4Arr);

        // 3 x 1
        if (column3Arr[0] === generic1Arr[0] && column3Arr[0] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[1] === generic1Arr[1] && column3Arr[1] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[2] === generic1Arr[2] && column3Arr[2] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[3] === generic1Arr[3] && column3Arr[3] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[4] === generic1Arr[4] && column3Arr[4] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[5] === generic1Arr[5] && column3Arr[5] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[6] === generic1Arr[6] && column3Arr[6] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[7] === generic1Arr[7] && column3Arr[7] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[8] === generic1Arr[8] && column3Arr[8] === 1) {
            setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
        }

        // 3 x 2
        if (column3Arr[0] === generic2Arr[0] && column3Arr[0] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[1] === generic2Arr[1] && column3Arr[1] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[2] === generic2Arr[2] && column3Arr[2] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[3] === generic2Arr[3] && column3Arr[3] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[4] === generic2Arr[4] && column3Arr[4] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[5] === generic2Arr[5] && column3Arr[5] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[6] === generic2Arr[6] && column3Arr[6] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[7] === generic2Arr[7] && column3Arr[7] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[8] === generic2Arr[8] && column3Arr[8] === 1) {
            setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
        }

        // 3 x 3
        if (column3Arr[0] === generic3Arr[0] && column3Arr[0] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[1] === generic3Arr[1] && column3Arr[1] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[2] === generic3Arr[2] && column3Arr[2] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[3] === generic3Arr[3] && column3Arr[3] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[4] === generic3Arr[4] && column3Arr[4] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[5] === generic3Arr[5] && column3Arr[5] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[6] === generic3Arr[6] && column3Arr[6] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[7] === generic3Arr[7] && column3Arr[7] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[8] === generic3Arr[8] && column3Arr[8] === 1) {
            setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
        }

        // 3 x 4
        if (column3Arr[0] === generic4Arr[0] && column3Arr[0] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[1] === generic4Arr[1] && column3Arr[1] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[2] === generic4Arr[2] && column3Arr[2] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[3] === generic4Arr[3] && column3Arr[3] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[4] === generic4Arr[4] && column3Arr[4] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[5] === generic4Arr[5] && column3Arr[5] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[6] === generic4Arr[6] && column3Arr[6] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[7] === generic4Arr[7] && column3Arr[7] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }
        if (column3Arr[8] === generic4Arr[8] && column3Arr[8] === 1) {
            setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
        }

        // 4 x 1
        if (column4Arr[0] === generic1Arr[0] && column4Arr[0] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[1] === generic1Arr[1] && column4Arr[1] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[2] === generic1Arr[2] && column4Arr[2] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[3] === generic1Arr[3] && column4Arr[3] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[4] === generic1Arr[4] && column4Arr[4] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[5] === generic1Arr[5] && column4Arr[5] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[6] === generic1Arr[6] && column4Arr[6] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[7] === generic1Arr[7] && column4Arr[7] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[8] === generic1Arr[8] && column4Arr[8] === 1) {
            setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
        }

        // 4 x 2
        if (column4Arr[0] === generic2Arr[0] && column4Arr[0] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[1] === generic2Arr[1] && column4Arr[1] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[2] === generic2Arr[2] && column4Arr[2] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[3] === generic2Arr[3] && column4Arr[3] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[4] === generic2Arr[4] && column4Arr[4] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[5] === generic2Arr[5] && column4Arr[5] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[6] === generic2Arr[6] && column4Arr[6] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[7] === generic2Arr[7] && column4Arr[7] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[8] === generic2Arr[8] && column4Arr[8] === 1) {
            setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
        }

        // 4 x 3
        if (column4Arr[0] === generic3Arr[0] && column4Arr[0] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[1] === generic3Arr[1] && column4Arr[1] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[2] === generic3Arr[2] && column4Arr[2] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[3] === generic3Arr[3] && column4Arr[3] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[4] === generic3Arr[4] && column4Arr[4] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[5] === generic3Arr[5] && column4Arr[5] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[6] === generic3Arr[6] && column4Arr[6] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[7] === generic3Arr[7] && column4Arr[7] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[8] === generic3Arr[8] && column4Arr[8] === 1) {
            setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
        }

        // 4 x 4
        if (column4Arr[0] === generic4Arr[0] && column4Arr[0] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[1] === generic4Arr[1] && column4Arr[1] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[2] === generic4Arr[2] && column4Arr[2] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[3] === generic4Arr[3] && column4Arr[3] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[4] === generic4Arr[4] && column4Arr[4] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[5] === generic4Arr[5] && column4Arr[5] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[6] === generic4Arr[6] && column4Arr[6] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[7] === generic4Arr[7] && column4Arr[7] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }
        if (column4Arr[8] === generic4Arr[8] && column4Arr[8] === 1) {
            setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
        }

        // 5 x 1
        if (column5Arr[0] === generic1Arr[0] && column5Arr[0] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[1] === generic1Arr[1] && column5Arr[1] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[2] === generic1Arr[2] && column5Arr[2] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[3] === generic1Arr[3] && column5Arr[3] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[4] === generic1Arr[4] && column5Arr[4] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[5] === generic1Arr[5] && column5Arr[5] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[6] === generic1Arr[6] && column5Arr[6] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[7] === generic1Arr[7] && column5Arr[7] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[8] === generic1Arr[8] && column5Arr[8] === 1) {
            setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
        }

        // 5 x 2
        if (column5Arr[0] === generic2Arr[0] && column5Arr[0] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[1] === generic2Arr[1] && column5Arr[1] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[2] === generic2Arr[2] && column5Arr[2] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[3] === generic2Arr[3] && column5Arr[3] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[4] === generic2Arr[4] && column5Arr[4] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[5] === generic2Arr[5] && column5Arr[5] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[6] === generic2Arr[6] && column5Arr[6] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[7] === generic2Arr[7] && column5Arr[7] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[8] === generic2Arr[8] && column5Arr[8] === 1) {
            setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
        }

        // 5 x 3
        if (column5Arr[0] === generic3Arr[0] && column5Arr[0] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[1] === generic3Arr[1] && column5Arr[1] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[2] === generic3Arr[2] && column5Arr[2] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[3] === generic3Arr[3] && column5Arr[3] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[4] === generic3Arr[4] && column5Arr[4] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[5] === generic3Arr[5] && column5Arr[5] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[6] === generic3Arr[6] && column5Arr[6] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[7] === generic3Arr[7] && column5Arr[7] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[8] === generic3Arr[8] && column5Arr[8] === 1) {
            setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
        }

        // 5 x 4
        if (column5Arr[0] === generic4Arr[0] && column5Arr[0] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[1] === generic4Arr[1] && column5Arr[1] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[2] === generic4Arr[2] && column5Arr[2] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[3] === generic4Arr[3] && column5Arr[3] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[4] === generic4Arr[4] && column5Arr[4] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[5] === generic4Arr[5] && column5Arr[5] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[6] === generic4Arr[6] && column5Arr[6] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[7] === generic4Arr[7] && column5Arr[7] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }
        if (column5Arr[8] === generic4Arr[8] && column5Arr[8] === 1) {
            setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
        }

        // 6 x 1
        if (column6Arr[0] === generic1Arr[0] && column6Arr[0] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[1] === generic1Arr[1] && column6Arr[1] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[2] === generic1Arr[2] && column6Arr[2] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[3] === generic1Arr[3] && column6Arr[3] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[4] === generic1Arr[4] && column6Arr[4] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[5] === generic1Arr[5] && column6Arr[5] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[6] === generic1Arr[6] && column6Arr[6] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[7] === generic1Arr[7] && column6Arr[7] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[8] === generic1Arr[8] && column6Arr[8] === 1) {
            setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
        }

        // 6 x 2
        if (column6Arr[0] === generic2Arr[0] && column6Arr[0] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[1] === generic2Arr[1] && column6Arr[1] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[2] === generic2Arr[2] && column6Arr[2] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[3] === generic2Arr[3] && column6Arr[3] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[4] === generic2Arr[4] && column6Arr[4] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[5] === generic2Arr[5] && column6Arr[5] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[6] === generic2Arr[6] && column6Arr[6] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[7] === generic2Arr[7] && column6Arr[7] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[8] === generic2Arr[8] && column6Arr[8] === 1) {
            setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
        }

        // 6 x 3
        if (column6Arr[0] === generic3Arr[0] && column6Arr[0] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[1] === generic3Arr[1] && column6Arr[1] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[2] === generic3Arr[2] && column6Arr[2] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[3] === generic3Arr[3] && column6Arr[3] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[4] === generic3Arr[4] && column6Arr[4] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[5] === generic3Arr[5] && column6Arr[5] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[6] === generic3Arr[6] && column6Arr[6] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[7] === generic3Arr[7] && column6Arr[7] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[8] === generic3Arr[8] && column6Arr[8] === 1) {
            setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
        }

        // 6 x 4
        if (column6Arr[0] === generic4Arr[0] && column6Arr[0] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[1] === generic4Arr[1] && column6Arr[1] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[2] === generic4Arr[2] && column6Arr[2] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[3] === generic4Arr[3] && column6Arr[3] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[4] === generic4Arr[4] && column6Arr[4] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[5] === generic4Arr[5] && column6Arr[5] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[6] === generic4Arr[6] && column6Arr[6] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[7] === generic4Arr[7] && column6Arr[7] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }
        if (column6Arr[8] === generic4Arr[8] && column6Arr[8] === 1) {
            setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
        }

        // 7 x 1
        if (column7Arr[0] === generic1Arr[0] && column7Arr[0] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[1] === generic1Arr[1] && column7Arr[1] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[2] === generic1Arr[2] && column7Arr[2] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[3] === generic1Arr[3] && column7Arr[3] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[4] === generic1Arr[4] && column7Arr[4] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[5] === generic1Arr[5] && column7Arr[5] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[6] === generic1Arr[6] && column7Arr[6] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[7] === generic1Arr[7] && column7Arr[7] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[8] === generic1Arr[8] && column7Arr[8] === 1) {
            setNumberOfCoincidences7x1((prevNumber) => prevNumber + 1);
        }

        // 7 x 2
        if (column7Arr[0] === generic2Arr[0] && column7Arr[0] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[1] === generic2Arr[1] && column7Arr[1] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[2] === generic2Arr[2] && column7Arr[2] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[3] === generic2Arr[3] && column7Arr[3] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[4] === generic2Arr[4] && column7Arr[4] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[5] === generic2Arr[5] && column7Arr[5] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[6] === generic2Arr[6] && column7Arr[6] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[7] === generic2Arr[7] && column7Arr[7] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[8] === generic2Arr[8] && column7Arr[8] === 1) {
            setNumberOfCoincidences7x2((prevNumber) => prevNumber + 1);
        }

        // 7 x 3
        if (column7Arr[0] === generic3Arr[0] && column7Arr[0] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[1] === generic3Arr[1] && column7Arr[1] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[2] === generic3Arr[2] && column7Arr[2] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[3] === generic3Arr[3] && column7Arr[3] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[4] === generic3Arr[4] && column7Arr[4] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[5] === generic3Arr[5] && column7Arr[5] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[6] === generic3Arr[6] && column7Arr[6] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[7] === generic3Arr[7] && column7Arr[7] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[8] === generic3Arr[8] && column7Arr[8] === 1) {
            setNumberOfCoincidences7x3((prevNumber) => prevNumber + 1);
        }

        // 7 x 4
        if (column7Arr[0] === generic4Arr[0] && column7Arr[0] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[1] === generic4Arr[1] && column7Arr[1] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[2] === generic4Arr[2] && column7Arr[2] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[3] === generic4Arr[3] && column7Arr[3] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[4] === generic4Arr[4] && column7Arr[4] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[5] === generic4Arr[5] && column7Arr[5] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[6] === generic4Arr[6] && column7Arr[6] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[7] === generic4Arr[7] && column7Arr[7] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }
        if (column7Arr[8] === generic4Arr[8] && column7Arr[8] === 1) {
            setNumberOfCoincidences7x4((prevNumber) => prevNumber + 1);
        }

        // 8 x 1
        if (column8Arr[0] === generic1Arr[0] && column8Arr[0] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[1] === generic1Arr[1] && column8Arr[1] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[2] === generic1Arr[2] && column8Arr[2] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[3] === generic1Arr[3] && column8Arr[3] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[4] === generic1Arr[4] && column8Arr[4] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[5] === generic1Arr[5] && column8Arr[5] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[6] === generic1Arr[6] && column8Arr[6] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[7] === generic1Arr[7] && column8Arr[7] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[8] === generic1Arr[8] && column8Arr[8] === 1) {
            setNumberOfCoincidences8x1((prevNumber) => prevNumber + 1);
        }

        // 8 x 2
        if (column8Arr[0] === generic2Arr[0] && column8Arr[0] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[1] === generic2Arr[1] && column8Arr[1] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[2] === generic2Arr[2] && column8Arr[2] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[3] === generic2Arr[3] && column8Arr[3] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[4] === generic2Arr[4] && column8Arr[4] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[5] === generic2Arr[5] && column8Arr[5] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[6] === generic2Arr[6] && column8Arr[6] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[7] === generic2Arr[7] && column8Arr[7] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[8] === generic2Arr[8] && column8Arr[8] === 1) {
            setNumberOfCoincidences8x2((prevNumber) => prevNumber + 1);
        }

        // 8 x 3
        if (column8Arr[0] === generic3Arr[0] && column8Arr[0] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[1] === generic3Arr[1] && column8Arr[1] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[2] === generic3Arr[2] && column8Arr[2] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[3] === generic3Arr[3] && column8Arr[3] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[4] === generic3Arr[4] && column8Arr[4] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[5] === generic3Arr[5] && column8Arr[5] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[6] === generic3Arr[6] && column8Arr[6] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[7] === generic3Arr[7] && column8Arr[7] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[8] === generic3Arr[8] && column8Arr[8] === 1) {
            setNumberOfCoincidences8x3((prevNumber) => prevNumber + 1);
        }

        // 8 x 4
        if (column8Arr[0] === generic4Arr[0] && column8Arr[0] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[1] === generic4Arr[1] && column8Arr[1] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[2] === generic4Arr[2] && column8Arr[2] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[3] === generic4Arr[3] && column8Arr[3] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[4] === generic4Arr[4] && column8Arr[4] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[5] === generic4Arr[5] && column8Arr[5] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[6] === generic4Arr[6] && column8Arr[6] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[7] === generic4Arr[7] && column8Arr[7] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }
        if (column8Arr[8] === generic4Arr[8] && column8Arr[8] === 1) {
            setNumberOfCoincidences8x4((prevNumber) => prevNumber + 1);
        }

        // 9 x 1
        if (column9Arr[0] === generic1Arr[0] && column9Arr[0] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[1] === generic1Arr[1] && column9Arr[1] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[2] === generic1Arr[2] && column9Arr[2] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[3] === generic1Arr[3] && column9Arr[3] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[4] === generic1Arr[4] && column9Arr[4] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[5] === generic1Arr[5] && column9Arr[5] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[6] === generic1Arr[6] && column9Arr[6] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[7] === generic1Arr[7] && column9Arr[7] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[8] === generic1Arr[8] && column9Arr[8] === 1) {
            setNumberOfCoincidences9x1((prevNumber) => prevNumber + 1);
        }

        // 9 x 2
        if (column9Arr[0] === generic2Arr[0] && column9Arr[0] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[1] === generic2Arr[1] && column9Arr[1] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[2] === generic2Arr[2] && column9Arr[2] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[3] === generic2Arr[3] && column9Arr[3] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[4] === generic2Arr[4] && column9Arr[4] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[5] === generic2Arr[5] && column9Arr[5] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[6] === generic2Arr[6] && column9Arr[6] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[7] === generic2Arr[7] && column9Arr[7] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[8] === generic2Arr[8] && column9Arr[8] === 1) {
            setNumberOfCoincidences9x2((prevNumber) => prevNumber + 1);
        }

        // 9 x 3
        if (column9Arr[0] === generic3Arr[0] && column9Arr[0] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[1] === generic3Arr[1] && column9Arr[1] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[2] === generic3Arr[2] && column9Arr[2] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[3] === generic3Arr[3] && column9Arr[3] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[4] === generic3Arr[4] && column9Arr[4] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[5] === generic3Arr[5] && column9Arr[5] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[6] === generic3Arr[6] && column9Arr[6] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[7] === generic3Arr[7] && column9Arr[7] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[8] === generic3Arr[8] && column9Arr[8] === 1) {
            setNumberOfCoincidences9x3((prevNumber) => prevNumber + 1);
        }

        // 9 x 4
        if (column9Arr[0] === generic4Arr[0] && column9Arr[0] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[1] === generic4Arr[1] && column9Arr[1] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[2] === generic4Arr[2] && column9Arr[2] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[3] === generic4Arr[3] && column9Arr[3] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[4] === generic4Arr[4] && column9Arr[4] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[5] === generic4Arr[5] && column9Arr[5] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[6] === generic4Arr[6] && column9Arr[6] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[7] === generic4Arr[7] && column9Arr[7] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }
        if (column9Arr[8] === generic4Arr[8] && column9Arr[8] === 1) {
            setNumberOfCoincidences9x4((prevNumber) => prevNumber + 1);
        }

        // 10 x 1
        if (column10Arr[0] === generic1Arr[0] && column10Arr[0] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[1] === generic1Arr[1] && column10Arr[1] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[2] === generic1Arr[2] && column10Arr[2] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[3] === generic1Arr[3] && column10Arr[3] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[4] === generic1Arr[4] && column10Arr[4] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[5] === generic1Arr[5] && column10Arr[5] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[6] === generic1Arr[6] && column10Arr[6] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[7] === generic1Arr[7] && column10Arr[7] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[8] === generic1Arr[8] && column10Arr[8] === 1) {
            setNumberOfCoincidences10x1((prevNumber) => prevNumber + 1);
        }

        // 10 x 2
        if (column10Arr[0] === generic2Arr[0] && column10Arr[0] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[1] === generic2Arr[1] && column10Arr[1] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[2] === generic2Arr[2] && column10Arr[2] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[3] === generic2Arr[3] && column10Arr[3] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[4] === generic2Arr[4] && column10Arr[4] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[5] === generic2Arr[5] && column10Arr[5] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[6] === generic2Arr[6] && column10Arr[6] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[7] === generic2Arr[7] && column10Arr[7] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[8] === generic2Arr[8] && column10Arr[8] === 1) {
            setNumberOfCoincidences10x2((prevNumber) => prevNumber + 1);
        }

        // 10 x 3
        if (column10Arr[0] === generic3Arr[0] && column10Arr[0] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[1] === generic3Arr[1] && column10Arr[1] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[2] === generic3Arr[2] && column10Arr[2] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[3] === generic3Arr[3] && column10Arr[3] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[4] === generic3Arr[4] && column10Arr[4] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[5] === generic3Arr[5] && column10Arr[5] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[6] === generic3Arr[6] && column10Arr[6] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[7] === generic3Arr[7] && column10Arr[7] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[8] === generic3Arr[8] && column10Arr[8] === 1) {
            setNumberOfCoincidences10x3((prevNumber) => prevNumber + 1);
        }

        // 10 x 4
        if (column10Arr[0] === generic4Arr[0] && column10Arr[0] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[1] === generic4Arr[1] && column10Arr[1] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[2] === generic4Arr[2] && column10Arr[2] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[3] === generic4Arr[3] && column10Arr[3] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[4] === generic4Arr[4] && column10Arr[4] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[5] === generic4Arr[5] && column10Arr[5] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[6] === generic4Arr[6] && column10Arr[6] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[7] === generic4Arr[7] && column10Arr[7] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }
        if (column10Arr[8] === generic4Arr[8] && column10Arr[8] === 1) {
            setNumberOfCoincidences10x4((prevNumber) => prevNumber + 1);
        }

        // 11 x 1
        if (column11Arr[0] === generic1Arr[0] && column11Arr[0] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[1] === generic1Arr[1] && column11Arr[1] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[2] === generic1Arr[2] && column11Arr[2] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[3] === generic1Arr[3] && column11Arr[3] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[4] === generic1Arr[4] && column11Arr[4] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[5] === generic1Arr[5] && column11Arr[5] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[6] === generic1Arr[6] && column11Arr[6] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[7] === generic1Arr[7] && column11Arr[7] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[8] === generic1Arr[8] && column11Arr[8] === 1) {
            setNumberOfCoincidences11x1((prevNumber) => prevNumber + 1);
        }

        // 11 x 2
        if (column11Arr[0] === generic2Arr[0] && column11Arr[0] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[1] === generic2Arr[1] && column11Arr[1] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[2] === generic2Arr[2] && column11Arr[2] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[3] === generic2Arr[3] && column11Arr[3] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[4] === generic2Arr[4] && column11Arr[4] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[5] === generic2Arr[5] && column11Arr[5] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[6] === generic2Arr[6] && column11Arr[6] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[7] === generic2Arr[7] && column11Arr[7] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[8] === generic2Arr[8] && column11Arr[8] === 1) {
            setNumberOfCoincidences11x2((prevNumber) => prevNumber + 1);
        }

        // 11 x 3
        if (column11Arr[0] === generic3Arr[0] && column11Arr[0] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[1] === generic3Arr[1] && column11Arr[1] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[2] === generic3Arr[2] && column11Arr[2] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[3] === generic3Arr[3] && column11Arr[3] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[4] === generic3Arr[4] && column11Arr[4] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[5] === generic3Arr[5] && column11Arr[5] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[6] === generic3Arr[6] && column11Arr[6] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[7] === generic3Arr[7] && column11Arr[7] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[8] === generic3Arr[8] && column11Arr[8] === 1) {
            setNumberOfCoincidences11x3((prevNumber) => prevNumber + 1);
        }

        // 11 x 4
        if (column11Arr[0] === generic4Arr[0] && column11Arr[0] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[1] === generic4Arr[1] && column11Arr[1] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[2] === generic4Arr[2] && column11Arr[2] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[3] === generic4Arr[3] && column11Arr[3] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[4] === generic4Arr[4] && column11Arr[4] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[5] === generic4Arr[5] && column11Arr[5] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[6] === generic4Arr[6] && column11Arr[6] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[7] === generic4Arr[7] && column11Arr[7] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }
        if (column11Arr[8] === generic4Arr[8] && column11Arr[8] === 1) {
            setNumberOfCoincidences11x4((prevNumber) => prevNumber + 1);
        }

        // 12 x 1
        if (column12Arr[0] === generic1Arr[0] && column12Arr[0] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[1] === generic1Arr[1] && column12Arr[1] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[2] === generic1Arr[2] && column12Arr[2] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[3] === generic1Arr[3] && column12Arr[3] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[4] === generic1Arr[4] && column12Arr[4] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[5] === generic1Arr[5] && column12Arr[5] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[6] === generic1Arr[6] && column12Arr[6] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[7] === generic1Arr[7] && column12Arr[7] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[8] === generic1Arr[8] && column12Arr[8] === 1) {
            setNumberOfCoincidences12x1((prevNumber) => prevNumber + 1);
        }

        // 12 x 2
        if (column12Arr[0] === generic2Arr[0] && column12Arr[0] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[1] === generic2Arr[1] && column12Arr[1] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[2] === generic2Arr[2] && column12Arr[2] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[3] === generic2Arr[3] && column12Arr[3] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[4] === generic2Arr[4] && column12Arr[4] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[5] === generic2Arr[5] && column12Arr[5] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[6] === generic2Arr[6] && column12Arr[6] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[7] === generic2Arr[7] && column12Arr[7] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[8] === generic2Arr[8] && column12Arr[8] === 1) {
            setNumberOfCoincidences12x2((prevNumber) => prevNumber + 1);
        }

        // 12 x 3
        if (column12Arr[0] === generic3Arr[0] && column12Arr[0] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[1] === generic3Arr[1] && column12Arr[1] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[2] === generic3Arr[2] && column12Arr[2] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[3] === generic3Arr[3] && column12Arr[3] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[4] === generic3Arr[4] && column12Arr[4] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[5] === generic3Arr[5] && column12Arr[5] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[6] === generic3Arr[6] && column12Arr[6] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[7] === generic3Arr[7] && column12Arr[7] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[8] === generic3Arr[8] && column12Arr[8] === 1) {
            setNumberOfCoincidences12x3((prevNumber) => prevNumber + 1);
        }

        // 12 x 4
        if (column12Arr[0] === generic4Arr[0] && column12Arr[0] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[1] === generic4Arr[1] && column12Arr[1] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[2] === generic4Arr[2] && column12Arr[2] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[3] === generic4Arr[3] && column12Arr[3] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[4] === generic4Arr[4] && column12Arr[4] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[5] === generic4Arr[5] && column12Arr[5] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[6] === generic4Arr[6] && column12Arr[6] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[7] === generic4Arr[7] && column12Arr[7] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }
        if (column12Arr[8] === generic4Arr[8] && column12Arr[8] === 1) {
            setNumberOfCoincidences12x4((prevNumber) => prevNumber + 1);
        }

        // 13 x 1
        if (column13Arr[0] === generic1Arr[0] && column13Arr[0] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[1] === generic1Arr[1] && column13Arr[1] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[2] === generic1Arr[2] && column13Arr[2] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[3] === generic1Arr[3] && column13Arr[3] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[4] === generic1Arr[4] && column13Arr[4] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[5] === generic1Arr[5] && column13Arr[5] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[6] === generic1Arr[6] && column13Arr[6] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[7] === generic1Arr[7] && column13Arr[7] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[8] === generic1Arr[8] && column13Arr[8] === 1) {
            setNumberOfCoincidences13x1((prevNumber) => prevNumber + 1);
        }

        // 13 x 2
        if (column13Arr[0] === generic2Arr[0] && column13Arr[0] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[1] === generic2Arr[1] && column13Arr[1] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[2] === generic2Arr[2] && column13Arr[2] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[3] === generic2Arr[3] && column13Arr[3] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[4] === generic2Arr[4] && column13Arr[4] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[5] === generic2Arr[5] && column13Arr[5] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[6] === generic2Arr[6] && column13Arr[6] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[7] === generic2Arr[7] && column13Arr[7] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[8] === generic2Arr[8] && column13Arr[8] === 1) {
            setNumberOfCoincidences13x2((prevNumber) => prevNumber + 1);
        }

        // 13 x 3
        if (column13Arr[0] === generic3Arr[0] && column13Arr[0] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[1] === generic3Arr[1] && column13Arr[1] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[2] === generic3Arr[2] && column13Arr[2] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[3] === generic3Arr[3] && column13Arr[3] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[4] === generic3Arr[4] && column13Arr[4] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[5] === generic3Arr[5] && column13Arr[5] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[6] === generic3Arr[6] && column13Arr[6] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[7] === generic3Arr[7] && column13Arr[7] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[8] === generic3Arr[8] && column13Arr[8] === 1) {
            setNumberOfCoincidences13x3((prevNumber) => prevNumber + 1);
        }

        // 13 x 4
        if (column13Arr[0] === generic4Arr[0] && column13Arr[0] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[1] === generic4Arr[1] && column13Arr[1] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[2] === generic4Arr[2] && column13Arr[2] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[3] === generic4Arr[3] && column13Arr[3] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[4] === generic4Arr[4] && column13Arr[4] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[5] === generic4Arr[5] && column13Arr[5] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[6] === generic4Arr[6] && column13Arr[6] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[7] === generic4Arr[7] && column13Arr[7] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }
        if (column13Arr[8] === generic4Arr[8] && column13Arr[8] === 1) {
            setNumberOfCoincidences13x4((prevNumber) => prevNumber + 1);
        }

        // 14 x 1
        if (column14Arr[0] === generic1Arr[0] && column14Arr[0] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[1] === generic1Arr[1] && column14Arr[1] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[2] === generic1Arr[2] && column14Arr[2] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[3] === generic1Arr[3] && column14Arr[3] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[4] === generic1Arr[4] && column14Arr[4] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[5] === generic1Arr[5] && column14Arr[5] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[6] === generic1Arr[6] && column14Arr[6] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[7] === generic1Arr[7] && column14Arr[7] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[8] === generic1Arr[8] && column14Arr[8] === 1) {
            setNumberOfCoincidences14x1((prevNumber) => prevNumber + 1);
        }

        // 14 x 2
        if (column14Arr[0] === generic2Arr[0] && column14Arr[0] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[1] === generic2Arr[1] && column14Arr[1] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[2] === generic2Arr[2] && column14Arr[2] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[3] === generic2Arr[3] && column14Arr[3] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[4] === generic2Arr[4] && column14Arr[4] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[5] === generic2Arr[5] && column14Arr[5] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[6] === generic2Arr[6] && column14Arr[6] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[7] === generic2Arr[7] && column14Arr[7] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[8] === generic2Arr[8] && column14Arr[8] === 1) {
            setNumberOfCoincidences14x2((prevNumber) => prevNumber + 1);
        }

        // 14 x 3
        if (column14Arr[0] === generic3Arr[0] && column14Arr[0] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[1] === generic3Arr[1] && column14Arr[1] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[2] === generic3Arr[2] && column14Arr[2] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[3] === generic3Arr[3] && column14Arr[3] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[4] === generic3Arr[4] && column14Arr[4] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[5] === generic3Arr[5] && column14Arr[5] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[6] === generic3Arr[6] && column14Arr[6] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[7] === generic3Arr[7] && column14Arr[7] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[8] === generic3Arr[8] && column14Arr[8] === 1) {
            setNumberOfCoincidences14x3((prevNumber) => prevNumber + 1);
        }

        // 14 x 4
        if (column14Arr[0] === generic4Arr[0] && column14Arr[0] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[1] === generic4Arr[1] && column14Arr[1] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[2] === generic4Arr[2] && column14Arr[2] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[3] === generic4Arr[3] && column14Arr[3] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[4] === generic4Arr[4] && column14Arr[4] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[5] === generic4Arr[5] && column14Arr[5] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[6] === generic4Arr[6] && column14Arr[6] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[7] === generic4Arr[7] && column14Arr[7] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }
        if (column14Arr[8] === generic4Arr[8] && column14Arr[8] === 1) {
            setNumberOfCoincidences14x4((prevNumber) => prevNumber + 1);
        }

        // 15 x 1
        if (column15Arr[0] === generic1Arr[0] && column15Arr[0] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[1] === generic1Arr[1] && column15Arr[1] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[2] === generic1Arr[2] && column15Arr[2] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[3] === generic1Arr[3] && column15Arr[3] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[4] === generic1Arr[4] && column15Arr[4] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[5] === generic1Arr[5] && column15Arr[5] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[6] === generic1Arr[6] && column15Arr[6] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[7] === generic1Arr[7] && column15Arr[7] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[8] === generic1Arr[8] && column15Arr[8] === 1) {
            setNumberOfCoincidences15x1((prevNumber) => prevNumber + 1);
        }

        // 15 x 2
        if (column15Arr[0] === generic2Arr[0] && column15Arr[0] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[1] === generic2Arr[1] && column15Arr[1] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[2] === generic2Arr[2] && column15Arr[2] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[3] === generic2Arr[3] && column15Arr[3] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[4] === generic2Arr[4] && column15Arr[4] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[5] === generic2Arr[5] && column15Arr[5] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[6] === generic2Arr[6] && column15Arr[6] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[7] === generic2Arr[7] && column15Arr[7] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[8] === generic2Arr[8] && column15Arr[8] === 1) {
            setNumberOfCoincidences15x2((prevNumber) => prevNumber + 1);
        }

        // 15 x 3
        if (column15Arr[0] === generic3Arr[0] && column15Arr[0] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[1] === generic3Arr[1] && column15Arr[1] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[2] === generic3Arr[2] && column15Arr[2] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[3] === generic3Arr[3] && column15Arr[3] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[4] === generic3Arr[4] && column15Arr[4] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[5] === generic3Arr[5] && column15Arr[5] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[6] === generic3Arr[6] && column15Arr[6] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[7] === generic3Arr[7] && column15Arr[7] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[8] === generic3Arr[8] && column15Arr[8] === 1) {
            setNumberOfCoincidences15x3((prevNumber) => prevNumber + 1);
        }

        // 15 x 4
        if (column15Arr[0] === generic4Arr[0] && column15Arr[0] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[1] === generic4Arr[1] && column15Arr[1] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[2] === generic4Arr[2] && column15Arr[2] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[3] === generic4Arr[3] && column15Arr[3] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[4] === generic4Arr[4] && column15Arr[4] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[5] === generic4Arr[5] && column15Arr[5] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[6] === generic4Arr[6] && column15Arr[6] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[7] === generic4Arr[7] && column15Arr[7] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }
        if (column15Arr[8] === generic4Arr[8] && column15Arr[8] === 1) {
            setNumberOfCoincidences15x4((prevNumber) => prevNumber + 1);
        }

        // 16 x 1
        if (column16Arr[0] === generic1Arr[0] && column16Arr[0] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[1] === generic1Arr[1] && column16Arr[1] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[2] === generic1Arr[2] && column16Arr[2] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[3] === generic1Arr[3] && column16Arr[3] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[4] === generic1Arr[4] && column16Arr[4] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[5] === generic1Arr[5] && column16Arr[5] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[6] === generic1Arr[6] && column16Arr[6] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[7] === generic1Arr[7] && column16Arr[7] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[8] === generic1Arr[8] && column16Arr[8] === 1) {
            setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
        }

        // 16 x 2
        if (column16Arr[0] === generic2Arr[0] && column16Arr[0] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[1] === generic2Arr[1] && column16Arr[1] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[2] === generic2Arr[2] && column16Arr[2] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[3] === generic2Arr[3] && column16Arr[3] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[4] === generic2Arr[4] && column16Arr[4] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[5] === generic2Arr[5] && column16Arr[5] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[6] === generic2Arr[6] && column16Arr[6] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[7] === generic2Arr[7] && column16Arr[7] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[8] === generic2Arr[8] && column16Arr[8] === 1) {
            setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
        }

        // 16 x 3
        if (column16Arr[0] === generic3Arr[0] && column16Arr[0] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[1] === generic3Arr[1] && column16Arr[1] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[2] === generic3Arr[2] && column16Arr[2] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[3] === generic3Arr[3] && column16Arr[3] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[4] === generic3Arr[4] && column16Arr[4] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[5] === generic3Arr[5] && column16Arr[5] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[6] === generic3Arr[6] && column16Arr[6] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[7] === generic3Arr[7] && column16Arr[7] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[8] === generic3Arr[8] && column16Arr[8] === 1) {
            setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
        }

        // 16 x 4
        if (column16Arr[0] === generic4Arr[0] && column16Arr[0] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[1] === generic4Arr[1] && column16Arr[1] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[2] === generic4Arr[2] && column16Arr[2] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[3] === generic4Arr[3] && column16Arr[3] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[4] === generic4Arr[4] && column16Arr[4] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[5] === generic4Arr[5] && column16Arr[5] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[6] === generic4Arr[6] && column16Arr[6] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[7] === generic4Arr[7] && column16Arr[7] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }
        if (column16Arr[8] === generic4Arr[8] && column16Arr[8] === 1) {
            setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
        }

        // 17 x 1
        if (column17Arr[0] === generic1Arr[0] && column17Arr[0] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[1] === generic1Arr[1] && column17Arr[1] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[2] === generic1Arr[2] && column17Arr[2] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[3] === generic1Arr[3] && column17Arr[3] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[4] === generic1Arr[4] && column17Arr[4] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[5] === generic1Arr[5] && column17Arr[5] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[6] === generic1Arr[6] && column17Arr[6] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[7] === generic1Arr[7] && column17Arr[7] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[8] === generic1Arr[8] && column17Arr[8] === 1) {
            setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
        }

        // 17 x 2
        if (column17Arr[0] === generic2Arr[0] && column17Arr[0] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[1] === generic2Arr[1] && column17Arr[1] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[2] === generic2Arr[2] && column17Arr[2] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[3] === generic2Arr[3] && column17Arr[3] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[4] === generic2Arr[4] && column17Arr[4] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[5] === generic2Arr[5] && column17Arr[5] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[6] === generic2Arr[6] && column17Arr[6] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[7] === generic2Arr[7] && column17Arr[7] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[8] === generic2Arr[8] && column17Arr[8] === 1) {
            setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
        }

        // 17 x 3
        if (column17Arr[0] === generic3Arr[0] && column17Arr[0] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[1] === generic3Arr[1] && column17Arr[1] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[2] === generic3Arr[2] && column17Arr[2] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[3] === generic3Arr[3] && column17Arr[3] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[4] === generic3Arr[4] && column17Arr[4] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[5] === generic3Arr[5] && column17Arr[5] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[6] === generic3Arr[6] && column17Arr[6] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[7] === generic3Arr[7] && column17Arr[7] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[8] === generic3Arr[8] && column17Arr[8] === 1) {
            setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
        }

        // 17 x 4
        if (column17Arr[0] === generic4Arr[0] && column17Arr[0] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[1] === generic4Arr[1] && column17Arr[1] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[2] === generic4Arr[2] && column17Arr[2] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[3] === generic4Arr[3] && column17Arr[3] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[4] === generic4Arr[4] && column17Arr[4] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[5] === generic4Arr[5] && column17Arr[5] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[6] === generic4Arr[6] && column17Arr[6] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[7] === generic4Arr[7] && column17Arr[7] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }
        if (column17Arr[8] === generic4Arr[8] && column17Arr[8] === 1) {
            setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
        }

        // 18 x 1
        if (column18Arr[0] === generic1Arr[0] && column18Arr[0] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[1] === generic1Arr[1] && column18Arr[1] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[2] === generic1Arr[2] && column18Arr[2] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[3] === generic1Arr[3] && column18Arr[3] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[4] === generic1Arr[4] && column18Arr[4] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[5] === generic1Arr[5] && column18Arr[5] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[6] === generic1Arr[6] && column18Arr[6] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[7] === generic1Arr[7] && column18Arr[7] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[8] === generic1Arr[8] && column18Arr[8] === 1) {
            setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
        }

        // 18 x 2
        if (column18Arr[0] === generic2Arr[0] && column18Arr[0] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[1] === generic2Arr[1] && column18Arr[1] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[2] === generic2Arr[2] && column18Arr[2] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[3] === generic2Arr[3] && column18Arr[3] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[4] === generic2Arr[4] && column18Arr[4] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[5] === generic2Arr[5] && column18Arr[5] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[6] === generic2Arr[6] && column18Arr[6] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[7] === generic2Arr[7] && column18Arr[7] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[8] === generic2Arr[8] && column18Arr[8] === 1) {
            setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
        }

        // 18 x 3
        if (column18Arr[0] === generic3Arr[0] && column18Arr[0] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[1] === generic3Arr[1] && column18Arr[1] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[2] === generic3Arr[2] && column18Arr[2] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[3] === generic3Arr[3] && column18Arr[3] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[4] === generic3Arr[4] && column18Arr[4] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[5] === generic3Arr[5] && column18Arr[5] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[6] === generic3Arr[6] && column18Arr[6] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[7] === generic3Arr[7] && column18Arr[7] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[8] === generic3Arr[8] && column18Arr[8] === 1) {
            setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
        }

        // 18 x 4
        if (column18Arr[0] === generic4Arr[0] && column18Arr[0] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[1] === generic4Arr[1] && column18Arr[1] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[2] === generic4Arr[2] && column18Arr[2] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[3] === generic4Arr[3] && column18Arr[3] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[4] === generic4Arr[4] && column18Arr[4] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[5] === generic4Arr[5] && column18Arr[5] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[6] === generic4Arr[6] && column18Arr[6] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[7] === generic4Arr[7] && column18Arr[7] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }
        if (column18Arr[8] === generic4Arr[8] && column18Arr[8] === 1) {
            setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
        }

        // 19 x 1
        if (column19Arr[0] === generic1Arr[0] && column19Arr[0] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[1] === generic1Arr[1] && column19Arr[1] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[2] === generic1Arr[2] && column19Arr[2] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[3] === generic1Arr[3] && column19Arr[3] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[4] === generic1Arr[4] && column19Arr[4] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[5] === generic1Arr[5] && column19Arr[5] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[6] === generic1Arr[6] && column19Arr[6] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[7] === generic1Arr[7] && column19Arr[7] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[8] === generic1Arr[8] && column19Arr[8] === 1) {
            setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
        }

        // 19 x 2
        if (column19Arr[0] === generic2Arr[0] && column19Arr[0] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[1] === generic2Arr[1] && column19Arr[1] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[2] === generic2Arr[2] && column19Arr[2] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[3] === generic2Arr[3] && column19Arr[3] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[4] === generic2Arr[4] && column19Arr[4] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[5] === generic2Arr[5] && column19Arr[5] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[6] === generic2Arr[6] && column19Arr[6] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[7] === generic2Arr[7] && column19Arr[7] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[8] === generic2Arr[8] && column19Arr[8] === 1) {
            setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
        }

        // 19 x 3
        if (column19Arr[0] === generic3Arr[0] && column19Arr[0] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[1] === generic3Arr[1] && column19Arr[1] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[2] === generic3Arr[2] && column19Arr[2] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[3] === generic3Arr[3] && column19Arr[3] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[4] === generic3Arr[4] && column19Arr[4] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[5] === generic3Arr[5] && column19Arr[5] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[6] === generic3Arr[6] && column19Arr[6] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[7] === generic3Arr[7] && column19Arr[7] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[8] === generic3Arr[8] && column19Arr[8] === 1) {
            setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
        }

        // 19 x 4
        if (column19Arr[0] === generic4Arr[0] && column19Arr[0] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[1] === generic4Arr[1] && column19Arr[1] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[2] === generic4Arr[2] && column19Arr[2] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[3] === generic4Arr[3] && column19Arr[3] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[4] === generic4Arr[4] && column19Arr[4] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[5] === generic4Arr[5] && column19Arr[5] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[6] === generic4Arr[6] && column19Arr[6] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[7] === generic4Arr[7] && column19Arr[7] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }
        if (column19Arr[8] === generic4Arr[8] && column19Arr[8] === 1) {
            setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
        }

        // 20 x 1
        if (column20Arr[0] === generic1Arr[0] && column20Arr[0] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[1] === generic1Arr[1] && column20Arr[1] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[2] === generic1Arr[2] && column20Arr[2] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[3] === generic1Arr[3] && column20Arr[3] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[4] === generic1Arr[4] && column20Arr[4] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[5] === generic1Arr[5] && column20Arr[5] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[6] === generic1Arr[6] && column20Arr[6] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[7] === generic1Arr[7] && column20Arr[7] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[8] === generic1Arr[8] && column20Arr[8] === 1) {
            setNumberOfCoincidences20x1((prevNumber) => prevNumber + 1);
        }

        // 20 x 2
        if (column20Arr[0] === generic2Arr[0] && column20Arr[0] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[1] === generic2Arr[1] && column20Arr[1] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[2] === generic2Arr[2] && column20Arr[2] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[3] === generic2Arr[3] && column20Arr[3] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[4] === generic2Arr[4] && column20Arr[4] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[5] === generic2Arr[5] && column20Arr[5] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[6] === generic2Arr[6] && column20Arr[6] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[7] === generic2Arr[7] && column20Arr[7] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[8] === generic2Arr[8] && column20Arr[8] === 1) {
            setNumberOfCoincidences20x2((prevNumber) => prevNumber + 1);
        }

        // 20 x 3
        if (column20Arr[0] === generic3Arr[0] && column20Arr[0] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[1] === generic3Arr[1] && column20Arr[1] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[2] === generic3Arr[2] && column20Arr[2] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[3] === generic3Arr[3] && column20Arr[3] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[4] === generic3Arr[4] && column20Arr[4] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[5] === generic3Arr[5] && column20Arr[5] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[6] === generic3Arr[6] && column20Arr[6] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[7] === generic3Arr[7] && column20Arr[7] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[8] === generic3Arr[8] && column20Arr[8] === 1) {
            setNumberOfCoincidences20x3((prevNumber) => prevNumber + 1);
        }

        // 20 x 4
        if (column20Arr[0] === generic4Arr[0] && column20Arr[0] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[1] === generic4Arr[1] && column20Arr[1] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[2] === generic4Arr[2] && column20Arr[2] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[3] === generic4Arr[3] && column20Arr[3] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[4] === generic4Arr[4] && column20Arr[4] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[5] === generic4Arr[5] && column20Arr[5] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[6] === generic4Arr[6] && column20Arr[6] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[7] === generic4Arr[7] && column20Arr[7] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
        if (column20Arr[8] === generic4Arr[8] && column20Arr[8] === 1) {
            setNumberOfCoincidences20x4((prevNumber) => prevNumber + 1);
        }
    };

    const isEven1x1 = numberOfCoincidences1x1 % 2 === 0;
    const resultText1x1 = isEven1x1 ? '0' : '1';

    const isEven1x2 = numberOfCoincidences1x2 % 2 === 0;
    const resultText1x2 = isEven1x2 ? '0' : '1';

    const isEven1x3 = numberOfCoincidences1x3 % 2 === 0;
    const resultText1x3 = isEven1x3 ? '0' : '1';

    const isEven1x4 = numberOfCoincidences1x4 % 2 === 0;
    const resultText1x4 = isEven1x4 ? '0' : '1';

    const isEven2x1 = numberOfCoincidences2x1 % 2 === 0;
    const resultText2x1 = isEven2x1 ? '0' : '1';

    const isEven2x2 = numberOfCoincidences2x2 % 2 === 0;
    const resultText2x2 = isEven2x2 ? '0' : '1';

    const isEven2x3 = numberOfCoincidences2x3 % 2 === 0;
    const resultText2x3 = isEven2x3 ? '0' : '1';

    const isEven2x4 = numberOfCoincidences2x4 % 2 === 0;
    const resultText2x4 = isEven2x4 ? '0' : '1';

    const isEven3x1 = numberOfCoincidences3x1 % 2 === 0;
    const resultText3x1 = isEven3x1 ? '0' : '1';

    const isEven3x2 = numberOfCoincidences3x2 % 2 === 0;
    const resultText3x2 = isEven3x2 ? '0' : '1';

    const isEven3x3 = numberOfCoincidences3x3 % 2 === 0;
    const resultText3x3 = isEven3x3 ? '0' : '1';

    const isEven3x4 = numberOfCoincidences3x4 % 2 === 0;
    const resultText3x4 = isEven3x4 ? '0' : '1';

    const isEven4x1 = numberOfCoincidences4x1 % 2 === 0;
    const resultText4x1 = isEven4x1 ? '0' : '1';

    const isEven4x2 = numberOfCoincidences4x2 % 2 === 0;
    const resultText4x2 = isEven4x2 ? '0' : '1';

    const isEven4x3 = numberOfCoincidences4x3 % 2 === 0;
    const resultText4x3 = isEven4x3 ? '0' : '1';

    const isEven4x4 = numberOfCoincidences4x4 % 2 === 0;
    const resultText4x4 = isEven4x4 ? '0' : '1';

    const isEven5x1 = numberOfCoincidences5x1 % 2 === 0;
    const resultText5x1 = isEven5x1 ? '0' : '1';

    const isEven5x2 = numberOfCoincidences5x2 % 2 === 0;
    const resultText5x2 = isEven5x2 ? '0' : '1';

    const isEven5x3 = numberOfCoincidences5x3 % 2 === 0;
    const resultText5x3 = isEven5x3 ? '0' : '1';

    const isEven5x4 = numberOfCoincidences5x4 % 2 === 0;
    const resultText5x4 = isEven5x4 ? '0' : '1';

    const isEven6x1 = numberOfCoincidences6x1 % 2 === 0;
    const resultText6x1 = isEven6x1 ? '0' : '1';

    const isEven6x2 = numberOfCoincidences6x2 % 2 === 0;
    const resultText6x2 = isEven6x2 ? '0' : '1';

    const isEven6x3 = numberOfCoincidences6x3 % 2 === 0;
    const resultText6x3 = isEven6x3 ? '0' : '1';

    const isEven6x4 = numberOfCoincidences6x4 % 2 === 0;
    const resultText6x4 = isEven6x4 ? '0' : '1';

    const isEven7x1 = numberOfCoincidences7x1 % 2 === 0;
    const resultText7x1 = isEven7x1 ? '0' : '1';

    const isEven7x2 = numberOfCoincidences7x2 % 2 === 0;
    const resultText7x2 = isEven7x2 ? '0' : '1';

    const isEven7x3 = numberOfCoincidences7x3 % 2 === 0;
    const resultText7x3 = isEven7x3 ? '0' : '1';

    const isEven7x4 = numberOfCoincidences7x4 % 2 === 0;
    const resultText7x4 = isEven7x4 ? '0' : '1';

    const isEven8x1 = numberOfCoincidences8x1 % 2 === 0;
    const resultText8x1 = isEven8x1 ? '0' : '1';

    const isEven8x2 = numberOfCoincidences8x2 % 2 === 0;
    const resultText8x2 = isEven8x2 ? '0' : '1';

    const isEven8x3 = numberOfCoincidences8x3 % 2 === 0;
    const resultText8x3 = isEven8x3 ? '0' : '1';

    const isEven8x4 = numberOfCoincidences8x4 % 2 === 0;
    const resultText8x4 = isEven8x4 ? '0' : '1';

    const isEven9x1 = numberOfCoincidences9x1 % 2 === 0;
    const resultText9x1 = isEven9x1 ? '0' : '1';

    const isEven9x2 = numberOfCoincidences9x2 % 2 === 0;
    const resultText9x2 = isEven9x2 ? '0' : '1';

    const isEven9x3 = numberOfCoincidences9x3 % 2 === 0;
    const resultText9x3 = isEven9x3 ? '0' : '1';

    const isEven9x4 = numberOfCoincidences9x4 % 2 === 0;
    const resultText9x4 = isEven9x4 ? '0' : '1';

    const isEven10x1 = numberOfCoincidences10x1 % 2 === 0;
    const resultText10x1 = isEven10x1 ? '0' : '1';

    const isEven10x2 = numberOfCoincidences10x2 % 2 === 0;
    const resultText10x2 = isEven10x2 ? '0' : '1';

    const isEven10x3 = numberOfCoincidences10x3 % 2 === 0;
    const resultText10x3 = isEven10x3 ? '0' : '1';

    const isEven10x4 = numberOfCoincidences10x4 % 2 === 0;
    const resultText10x4 = isEven10x4 ? '0' : '1';

    const isEven11x1 = numberOfCoincidences11x1 % 2 === 0;
    const resultText11x1 = isEven11x1 ? '0' : '1';

    const isEven11x2 = numberOfCoincidences11x2 % 2 === 0;
    const resultText11x2 = isEven11x2 ? '0' : '1';

    const isEven11x3 = numberOfCoincidences11x3 % 2 === 0;
    const resultText11x3 = isEven11x3 ? '0' : '1';

    const isEven11x4 = numberOfCoincidences11x4 % 2 === 0;
    const resultText11x4 = isEven11x4 ? '0' : '1';

    const isEven12x1 = numberOfCoincidences12x1 % 2 === 0;
    const resultText12x1 = isEven12x1 ? '0' : '1';

    const isEven12x2 = numberOfCoincidences12x2 % 2 === 0;
    const resultText12x2 = isEven12x2 ? '0' : '1';

    const isEven12x3 = numberOfCoincidences12x3 % 2 === 0;
    const resultText12x3 = isEven12x3 ? '0' : '1';

    const isEven12x4 = numberOfCoincidences12x4 % 2 === 0;
    const resultText12x4 = isEven12x4 ? '0' : '1';

    const isEven13x1 = numberOfCoincidences13x1 % 2 === 0;
    const resultText13x1 = isEven13x1 ? '0' : '1';

    const isEven13x2 = numberOfCoincidences13x2 % 2 === 0;
    const resultText13x2 = isEven13x2 ? '0' : '1';

    const isEven13x3 = numberOfCoincidences13x3 % 2 === 0;
    const resultText13x3 = isEven13x3 ? '0' : '1';

    const isEven13x4 = numberOfCoincidences13x4 % 2 === 0;
    const resultText13x4 = isEven13x4 ? '0' : '1';

    const isEven14x1 = numberOfCoincidences14x1 % 2 === 0;
    const resultText14x1 = isEven14x1 ? '0' : '1';

    const isEven14x2 = numberOfCoincidences14x2 % 2 === 0;
    const resultText14x2 = isEven14x2 ? '0' : '1';

    const isEven14x3 = numberOfCoincidences14x3 % 2 === 0;
    const resultText14x3 = isEven14x3 ? '0' : '1';

    const isEven14x4 = numberOfCoincidences14x4 % 2 === 0;
    const resultText14x4 = isEven14x4 ? '0' : '1';

    const isEven15x1 = numberOfCoincidences15x1 % 2 === 0;
    const resultText15x1 = isEven15x1 ? '0' : '1';

    const isEven15x2 = numberOfCoincidences15x2 % 2 === 0;
    const resultText15x2 = isEven15x2 ? '0' : '1';

    const isEven15x3 = numberOfCoincidences15x3 % 2 === 0;
    const resultText15x3 = isEven15x3 ? '0' : '1';

    const isEven15x4 = numberOfCoincidences15x4 % 2 === 0;
    const resultText15x4 = isEven15x4 ? '0' : '1';

    const isEven16x1 = numberOfCoincidences16x1 % 2 === 0;
    const resultText16x1 = isEven16x1 ? '0' : '1';

    const isEven16x2 = numberOfCoincidences16x2 % 2 === 0;
    const resultText16x2 = isEven16x2 ? '0' : '1';

    const isEven16x3 = numberOfCoincidences16x3 % 2 === 0;
    const resultText16x3 = isEven16x3 ? '0' : '1';

    const isEven16x4 = numberOfCoincidences16x4 % 2 === 0;
    const resultText16x4 = isEven16x4 ? '0' : '1';

    const isEven17x1 = numberOfCoincidences17x1 % 2 === 0;
    const resultText17x1 = isEven17x1 ? '0' : '1';

    const isEven17x2 = numberOfCoincidences17x2 % 2 === 0;
    const resultText17x2 = isEven17x2 ? '0' : '1';

    const isEven17x3 = numberOfCoincidences17x3 % 2 === 0;
    const resultText17x3 = isEven17x3 ? '0' : '1';

    const isEven17x4 = numberOfCoincidences17x4 % 2 === 0;
    const resultText17x4 = isEven17x4 ? '0' : '1';

    const isEven18x1 = numberOfCoincidences18x1 % 2 === 0;
    const resultText18x1 = isEven18x1 ? '0' : '1';

    const isEven18x2 = numberOfCoincidences18x2 % 2 === 0;
    const resultText18x2 = isEven18x2 ? '0' : '1';

    const isEven18x3 = numberOfCoincidences18x3 % 2 === 0;
    const resultText18x3 = isEven18x3 ? '0' : '1';

    const isEven18x4 = numberOfCoincidences18x4 % 2 === 0;
    const resultText18x4 = isEven18x4 ? '0' : '1';

    const isEven19x1 = numberOfCoincidences19x1 % 2 === 0;
    const resultText19x1 = isEven19x1 ? '0' : '1';

    const isEven19x2 = numberOfCoincidences19x2 % 2 === 0;
    const resultText19x2 = isEven19x2 ? '0' : '1';

    const isEven19x3 = numberOfCoincidences19x3 % 2 === 0;
    const resultText19x3 = isEven19x3 ? '0' : '1';

    const isEven19x4 = numberOfCoincidences19x4 % 2 === 0;
    const resultText19x4 = isEven19x4 ? '0' : '1';

    const isEven20x1 = numberOfCoincidences20x1 % 2 === 0;
    const resultText20x1 = isEven20x1 ? '0' : '1';

    const isEven20x2 = numberOfCoincidences20x2 % 2 === 0;
    const resultText20x2 = isEven20x2 ? '0' : '1';

    const isEven20x3 = numberOfCoincidences20x3 % 2 === 0;
    const resultText20x3 = isEven20x3 ? '0' : '1';

    const isEven20x4 = numberOfCoincidences20x4 % 2 === 0;
    const resultText20x4 = isEven20x4 ? '0' : '1';

    const getMatrixFromHorizontal = () => {
        //matrix rows
        const matrix1Str = localStorage.getItem('matrix1Arr');
        const matrix2Str = localStorage.getItem('matrix2Arr');
        const matrix3Str = localStorage.getItem('matrix3Arr');
        const matrix4Str = localStorage.getItem('matrix4Arr');
        const matrix5Str = localStorage.getItem('matrix5Arr');
        const matrix6Str = localStorage.getItem('matrix6Arr');
        const matrix7Str = localStorage.getItem('matrix7Arr');
        const matrix8Str = localStorage.getItem('matrix8Arr');
        const matrix9Str = localStorage.getItem('matrix9Arr');

        console.log('matrix1Str: ', matrix1Str);
        console.log('matrix2Str: ', matrix2Str);
        console.log('matrix3Str: ', matrix3Str);
        console.log('matrix4Str: ', matrix4Str);
        console.log('matrix5Str: ', matrix5Str);
        console.log('matrix6Str: ', matrix6Str);
        console.log('matrix7Str: ', matrix7Str);
        console.log('matrix8Str: ', matrix8Str);
        console.log('matrix9Str: ', matrix9Str);

        //horizontal check results
        const horizontalResultRow1Str = localStorage.getItem('horizontalResultRow1');

        console.log('horizontalResultRow1Str', horizontalResultRow1Str);
    };

    return (
        <div className="vertical-check-wrapper">
            <p className="component-title">Vertical Checks</p>
            <div className="generic-matrix-wrapper">
                <div className="column-position">
                    <div>P</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
                <div className="generic-first-row generic-row">
                    <div className="row-position">1</div>
                    <div className="row-1">
                        <input className="generic-1-1" id="generic-1-1" name="generic-1-1" placeholder={'1-1'} onChange={changeGeneric11} />
                        <input className="generic-1-2" id="generic-1-2" name="generic-1-2" placeholder={'1-2'} onChange={changeGeneric12} />
                        <input className="generic-1-3" id="generic-1-3" name="generic-1-3" placeholder={'1-3'} onChange={changeGeneric13} />
                        <input className="generic-1-4" id="generic-1-4" name="generic-1-4" placeholder={'1-4'} onChange={changeGeneric14} />
                    </div>
                </div>
                <div className="generic-second-row generic-row">
                    <div className="row-position">2</div>
                    <div className="row-2">
                        <input className="generic-2-1" id="generic-2-1" name="generic-2-1" placeholder={'2-1'} onChange={changeGeneric21} />
                        <input className="generic-2-2" id="generic-2-2" name="generic-2-2" placeholder={'2-2'} onChange={changeGeneric22} />
                        <input className="generic-2-3" id="generic-2-3" name="generic-2-3" placeholder={'2-3'} onChange={changeGeneric23} />
                        <input className="generic-2-4" id="generic-2-4" name="generic-2-4" placeholder={'2-4'} onChange={changeGeneric24} />
                    </div>
                </div>
                <div className="generic-third-row generic-row">
                    <div className="row-position">3</div>
                    <div className="row-3">
                        <input className="generic-3-1" id="generic-3-1" name="generic-3-1" placeholder={'3-1'} onChange={changeGeneric31} />
                        <input className="generic-3-2" id="generic-3-2" name="generic-3-2" placeholder={'3-2'} onChange={changeGeneric32} />
                        <input className="generic-3-3" id="generic-3-3" name="generic-3-3" placeholder={'3-3'} onChange={changeGeneric33} />
                        <input className="generic-3-4" id="generic-3-4" name="generic-3-4" placeholder={'3-4'} onChange={changeGeneric34} />
                    </div>
                </div>
                <div className="generic-fourth-row generic-row">
                    <div className="row-position">4</div>
                    <div className="row-4">
                        <input className="generic-4-1" id="generic-4-1" name="generic-4-1" placeholder={'4-1'} onChange={changeGeneric41} />
                        <input className="generic-4-2" id="generic-4-2" name="generic-4-2" placeholder={'4-2'} onChange={changeGeneric42} />
                        <input className="generic-4-3" id="generic-4-3" name="generic-4-3" placeholder={'4-3'} onChange={changeGeneric43} />
                        <input className="generic-4-4" id="generic-4-4" name="generic-4-4" placeholder={'4-4'} onChange={changeGeneric44} />
                    </div>
                </div>
                <div className="generic-fifth-row generic-row">
                    <div className="row-position">5</div>
                    <div className="row-5">
                        <input className="generic-5-1" id="generic-5-1" name="generic-5-1" placeholder={'5-1'} onChange={changeGeneric51} />
                        <input className="generic-5-2" id="generic-5-2" name="generic-5-2" placeholder={'5-2'} onChange={changeGeneric52} />
                        <input className="generic-5-3" id="generic-5-3" name="generic-5-3" placeholder={'5-3'} onChange={changeGeneric53} />
                        <input className="generic-5-4" id="generic-5-4" name="generic-5-4" placeholder={'5-4'} onChange={changeGeneric54} />
                    </div>
                </div>
                <div className="generic-sixth-row generic-row">
                    <div className="row-position">6</div>
                    <div className="row-6">
                        <input className="generic-6-1" id="generic-6-1" name="generic-6-1" placeholder={'6-1'} onChange={changeGeneric61} />
                        <input className="generic-6-2" id="generic-6-2" name="generic-6-2" placeholder={'6-2'} onChange={changeGeneric62} />
                        <input className="generic-6-3" id="generic-6-3" name="generic-6-3" placeholder={'6-3'} onChange={changeGeneric63} />
                        <input className="generic-6-4" id="generic-6-4" name="generic-6-4" placeholder={'6-4'} onChange={changeGeneric64} />
                    </div>
                </div>
                <div className="generic-seventh-row generic-row">
                    <div className="row-position">7</div>
                    <div className="row-7">
                        <input className="generic-7-1" id="generic-7-1" name="generic-7-1" placeholder={'7-1'} onChange={changeGeneric71} />
                        <input className="generic-7-2" id="generic-7-2" name="generic-7-2" placeholder={'7-2'} onChange={changeGeneric72} />
                        <input className="generic-7-3" id="generic-7-3" name="generic-7-3" placeholder={'7-3'} onChange={changeGeneric73} />
                        <input className="generic-7-4" id="generic-7-4" name="generic-7-4" placeholder={'7-4'} onChange={changeGeneric74} />
                    </div>
                </div>
                <div className="generic-eighth-row generic-row">
                    <div className="row-position">8</div>
                    <div className="row-8">
                        <input className="generic-8-1" id="generic-8-1" name="generic-8-1" placeholder={'8-1'} onChange={changeGeneric81} />
                        <input className="generic-8-2" id="generic-8-2" name="generic-8-2" placeholder={'8-2'} onChange={changeGeneric82} />
                        <input className="generic-8-3" id="generic-8-3" name="generic-8-3" placeholder={'8-3'} onChange={changeGeneric83} />
                        <input className="generic-8-4" id="generic-8-4" name="generic-8-4" placeholder={'8-4'} onChange={changeGeneric84} />
                    </div>
                </div>
                <div className="generic-ninth-row generic-row">
                    <div className="row-position">9</div>
                    <div className="row-9">
                        <input className="generic-9-1" id="generic-9-1" name="generic-9-1" placeholder={'9-1'} onChange={changeGeneric91} />
                        <input className="generic-9-2" id="generic-9-2" name="generic-9-2" placeholder={'9-2'} onChange={changeGeneric92} />
                        <input className="generic-9-3" id="generic-9-3" name="generic-9-3" placeholder={'9-3'} onChange={changeGeneric93} />
                        <input className="generic-9-4" id="generic-9-4" name="generic-9-4" placeholder={'9-4'} onChange={changeGeneric94} />
                    </div>
                </div>
            </div>
            <div className="matrix-wrapper">
                <div className="column-position">
                    <div>Pos</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                </div>
                <div className="matrix-first-row matrix-row">
                    <div className="row-position">1</div>
                    <div className="matrix-rows row-1">
                        <input className="textfield-1-1" id="text-1-1" name="text-1-1" placeholder={'1-1'} onChange={change11} />
                        <input className="textfield-1-2" id="text-1-2" name="text-1-2" placeholder={'1-2'} onChange={change12} />
                        <input className="textfield-1-3" id="text-1-3" name="text-1-3" placeholder={'1-3'} onChange={change13} />
                        <input className="textfield-1-4" id="text-1-4" name="text-1-4" placeholder={'1-4'} onChange={change14} />
                        <input className="textfield-1-5" id="text-1-5" name="text-1-5" placeholder={'1-5'} onChange={change15} />
                        <input className="textfield-1-6" id="text-1-6" name="text-1-6" placeholder={'1-6'} onChange={change16} />
                        <input className="textfield-1-7" id="text-1-7" name="text-1-7" placeholder={'1-7'} onChange={change17} />
                        <input className="textfield-1-8" id="text-1-8" name="text-1-8" placeholder={'1-8'} onChange={change18} />
                        <input className="textfield-1-9" id="text-1-9" name="text-1-9" placeholder={'1-9'} onChange={change19} />
                        <input className="textfield-1-10" id="text-1-10" name="text-1-10" placeholder={'1-10'} onChange={change110} />
                        <input className="textfield-1-11" id="text-1-11" name="text-1-11" placeholder={'1-11'} onChange={change111} />
                        <input className="textfield-1-12" id="text-1-12" name="text-1-12" placeholder={'1-12'} onChange={change112} />
                        <input className="textfield-1-13" id="text-1-13" name="text-1-13" placeholder={'1-13'} onChange={change113} />
                        <input className="textfield-1-14" id="text-1-14" name="text-1-14" placeholder={'1-14'} onChange={change114} />
                        <input className="textfield-1-15" id="text-1-15" name="text-1-15" placeholder={'1-15'} onChange={change115} />
                        <input className="textfield-1-16 external" id="text-1-16" name="text-1-16" placeholder={'1-16'} onChange={change116} />
                        <input className="textfield-1-17 external" id="text-1-17" name="text-1-17" placeholder={'1-17'} onChange={change117} />
                        <input className="textfield-1-18 external" id="text-1-18" name="text-1-18" placeholder={'1-18'} onChange={change118} />
                        <input className="textfield-1-19 external" id="text-1-19" name="text-1-19" placeholder={'1-19'} onChange={change119} />
                        <input className="textfield-1-20 external" id="text-1-20" name="text-1-20" placeholder={'1-20'} onChange={change120} />
                    </div>
                </div>
                <div className="matrix-second-row matrix-row">
                    <div className="row-position">2</div>
                    <div className="matrix-rows row-2">
                        <input className="textfield-2-1" id="text-2-1" name="text-2-1" placeholder={'2-1'} onChange={change21} />
                        <input className="textfield-2-2" id="text-2-2" name="text-2-2" placeholder={'2-2'} onChange={change22} />
                        <input className="textfield-2-3" id="text-2-3" name="text-2-3" placeholder={'2-3'} onChange={change23} />
                        <input className="textfield-2-4" id="text-2-4" name="text-2-4" placeholder={'2-4'} onChange={change24} />
                        <input className="textfield-2-5" id="text-2-5" name="text-2-5" placeholder={'2-5'} onChange={change25} />
                        <input className="textfield-2-6" id="text-2-6" name="text-2-6" placeholder={'2-6'} onChange={change26} />
                        <input className="textfield-2-7" id="text-2-7" name="text-2-7" placeholder={'2-7'} onChange={change27} />
                        <input className="textfield-2-8" id="text-2-8" name="text-2-8" placeholder={'2-8'} onChange={change28} />
                        <input className="textfield-2-9" id="text-2-9" name="text-2-9" placeholder={'2-9'} onChange={change29} />
                        <input className="textfield-2-10" id="text-2-10" name="text-2-10" placeholder={'2-10'} onChange={change210} />
                        <input className="textfield-2-11" id="text-2-11" name="text-2-11" placeholder={'2-11'} onChange={change211} />
                        <input className="textfield-2-12" id="text-2-12" name="text-2-12" placeholder={'2-12'} onChange={change212} />
                        <input className="textfield-2-13" id="text-2-13" name="text-2-13" placeholder={'2-13'} onChange={change213} />
                        <input className="textfield-2-14" id="text-2-14" name="text-2-14" placeholder={'2-14'} onChange={change214} />
                        <input className="textfield-2-15" id="text-2-15" name="text-2-15" placeholder={'2-15'} onChange={change215} />
                        <input className="textfield-2-16 external" id="text-2-16" name="text-2-16" placeholder={'2-16'} onChange={change216} />
                        <input className="textfield-2-17 external" id="text-2-17" name="text-2-17" placeholder={'2-17'} onChange={change217} />
                        <input className="textfield-2-18 external" id="text-2-18" name="text-2-18" placeholder={'2-18'} onChange={change218} />
                        <input className="textfield-2-19 external" id="text-2-19" name="text-2-19" placeholder={'2-19'} onChange={change219} />
                        <input className="textfield-2-20 external" id="text-2-20" name="text-2-20" placeholder={'2-20'} onChange={change220} />
                    </div>
                </div>
                <div className="matrix-third-row matrix-row">
                    <div className="row-position">3</div>
                    <div className="matrix-rows row-3">
                        <input className="textfield-3-1" id="text-3-1" name="text-3-1" placeholder={'3-1'} onChange={change31} />
                        <input className="textfield-3-2" id="text-3-2" name="text-3-2" placeholder={'3-2'} onChange={change32} />
                        <input className="textfield-3-3" id="text-3-3" name="text-3-3" placeholder={'3-3'} onChange={change33} />
                        <input className="textfield-3-4" id="text-3-4" name="text-3-4" placeholder={'3-4'} onChange={change34} />
                        <input className="textfield-3-5" id="text-3-5" name="text-3-5" placeholder={'3-5'} onChange={change35} />
                        <input className="textfield-3-6" id="text-3-6" name="text-3-6" placeholder={'3-6'} onChange={change36} />
                        <input className="textfield-3-7" id="text-3-7" name="text-3-7" placeholder={'3-7'} onChange={change37} />
                        <input className="textfield-3-8" id="text-3-8" name="text-3-8" placeholder={'3-8'} onChange={change38} />
                        <input className="textfield-3-9" id="text-3-9" name="text-3-9" placeholder={'3-9'} onChange={change39} />
                        <input className="textfield-3-10" id="text-3-10" name="text-3-10" placeholder={'3-10'} onChange={change310} />
                        <input className="textfield-3-11" id="text-3-11" name="text-3-11" placeholder={'3-11'} onChange={change311} />
                        <input className="textfield-3-12" id="text-3-12" name="text-3-12" placeholder={'3-12'} onChange={change312} />
                        <input className="textfield-3-13" id="text-3-13" name="text-3-13" placeholder={'3-13'} onChange={change313} />
                        <input className="textfield-3-14" id="text-3-14" name="text-3-14" placeholder={'3-14'} onChange={change314} />
                        <input className="textfield-3-15" id="text-3-15" name="text-3-15" placeholder={'3-15'} onChange={change315} />
                        <input className="textfield-3-16 external" id="text-3-16" name="text-3-16" placeholder={'3-16'} onChange={change316} />
                        <input className="textfield-3-17 external" id="text-3-17" name="text-3-17" placeholder={'3-17'} onChange={change317} />
                        <input className="textfield-3-18 external" id="text-3-18" name="text-3-18" placeholder={'3-18'} onChange={change318} />
                        <input className="textfield-3-19 external" id="text-3-19" name="text-3-19" placeholder={'3-19'} onChange={change319} />
                        <input className="textfield-3-20 external" id="text-3-20" name="text-3-20" placeholder={'3-20'} onChange={change320} />
                    </div>
                </div>
                <div className="matrix-fourth-row matrix-row">
                    <div className="row-position">4</div>
                    <div className="matrix-rows row-4">
                        <input className="textfield-4-1" id="text-4-1" name="text-4-1" placeholder={'4-1'} onChange={change41} />
                        <input className="textfield-4-2" id="text-4-2" name="text-4-2" placeholder={'4-2'} onChange={change42} />
                        <input className="textfield-4-3" id="text-4-3" name="text-4-3" placeholder={'4-3'} onChange={change43} />
                        <input className="textfield-4-4" id="text-4-4" name="text-4-4" placeholder={'4-4'} onChange={change44} />
                        <input className="textfield-4-5" id="text-4-5" name="text-4-5" placeholder={'4-5'} onChange={change45} />
                        <input className="textfield-4-6" id="text-4-6" name="text-4-6" placeholder={'4-6'} onChange={change46} />
                        <input className="textfield-4-7" id="text-4-7" name="text-4-7" placeholder={'4-7'} onChange={change47} />
                        <input className="textfield-4-8" id="text-4-8" name="text-4-8" placeholder={'4-8'} onChange={change48} />
                        <input className="textfield-4-9" id="text-4-9" name="text-4-9" placeholder={'4-9'} onChange={change49} />
                        <input className="textfield-4-10" id="text-4-10" name="text-4-10" placeholder={'4-10'} onChange={change410} />
                        <input className="textfield-4-11" id="text-4-11" name="text-4-11" placeholder={'4-11'} onChange={change411} />
                        <input className="textfield-4-12" id="text-4-12" name="text-4-12" placeholder={'4-12'} onChange={change412} />
                        <input className="textfield-4-13" id="text-4-13" name="text-4-13" placeholder={'4-13'} onChange={change413} />
                        <input className="textfield-4-14" id="text-4-14" name="text-4-14" placeholder={'4-14'} onChange={change414} />
                        <input className="textfield-4-15" id="text-4-15" name="text-4-15" placeholder={'4-15'} onChange={change415} />
                        <input className="textfield-4-16 external" id="text-4-16" name="text-4-16" placeholder={'4-16'} onChange={change416} />
                        <input className="textfield-4-17 external" id="text-4-17" name="text-4-17" placeholder={'4-17'} onChange={change417} />
                        <input className="textfield-4-18 external" id="text-4-18" name="text-4-18" placeholder={'4-18'} onChange={change418} />
                        <input className="textfield-4-19 external" id="text-4-19" name="text-4-19" placeholder={'4-19'} onChange={change419} />
                        <input className="textfield-4-20 external" id="text-4-20" name="text-4-20" placeholder={'4-20'} onChange={change420} />
                    </div>
                </div>
                <div className="matrix-fifth-row matrix-row">
                    <div className="row-position">5</div>
                    <div className="matrix-rows row-5">
                        <input className="textfield-5-1" id="text-5-1" name="text-5-1" placeholder={'5-1'} onChange={change51} />
                        <input className="textfield-5-2" id="text-5-2" name="text-5-2" placeholder={'5-2'} onChange={change52} />
                        <input className="textfield-5-3" id="text-5-3" name="text-5-3" placeholder={'5-3'} onChange={change53} />
                        <input className="textfield-5-4" id="text-5-4" name="text-5-4" placeholder={'5-4'} onChange={change54} />
                        <input className="textfield-5-5" id="text-5-5" name="text-5-5" placeholder={'5-5'} onChange={change55} />
                        <input className="textfield-5-6" id="text-5-6" name="text-5-6" placeholder={'5-6'} onChange={change56} />
                        <input className="textfield-5-7" id="text-5-7" name="text-5-7" placeholder={'5-7'} onChange={change57} />
                        <input className="textfield-5-8" id="text-5-8" name="text-5-8" placeholder={'5-8'} onChange={change58} />
                        <input className="textfield-5-9" id="text-5-9" name="text-5-9" placeholder={'5-9'} onChange={change59} />
                        <input className="textfield-5-10" id="text-5-10" name="text-5-10" placeholder={'5-10'} onChange={change510} />
                        <input className="textfield-5-11" id="text-5-11" name="text-5-11" placeholder={'5-11'} onChange={change511} />
                        <input className="textfield-5-12" id="text-5-12" name="text-5-12" placeholder={'5-12'} onChange={change512} />
                        <input className="textfield-5-13" id="text-5-13" name="text-5-13" placeholder={'5-13'} onChange={change513} />
                        <input className="textfield-5-14" id="text-5-14" name="text-5-14" placeholder={'5-14'} onChange={change514} />
                        <input className="textfield-5-15" id="text-5-15" name="text-5-15" placeholder={'5-15'} onChange={change515} />
                        <input className="textfield-5-16 external" id="text-5-16" name="text-5-16" placeholder={'5-16'} onChange={change516} />
                        <input className="textfield-5-17 external" id="text-5-17" name="text-5-17" placeholder={'5-17'} onChange={change517} />
                        <input className="textfield-5-18 external" id="text-5-18" name="text-5-18" placeholder={'5-18'} onChange={change518} />
                        <input className="textfield-5-19 external" id="text-5-19" name="text-5-19" placeholder={'5-19'} onChange={change519} />
                        <input className="textfield-5-20 external" id="text-5-20" name="text-5-20" placeholder={'5-20'} onChange={change520} />
                    </div>
                </div>
                <div className="matrix-sixth-row matrix-row">
                    <div className="row-position">6</div>
                    <div className="matrix-rows row-6">
                        <input className="textfield-6-1" id="text-6-1" name="text-6-1" placeholder={'6-1'} onChange={change61} />
                        <input className="textfield-6-2" id="text-6-2" name="text-6-2" placeholder={'6-2'} onChange={change62} />
                        <input className="textfield-6-3" id="text-6-3" name="text-6-3" placeholder={'6-3'} onChange={change63} />
                        <input className="textfield-6-4" id="text-6-4" name="text-6-4" placeholder={'6-4'} onChange={change64} />
                        <input className="textfield-6-5" id="text-6-5" name="text-6-5" placeholder={'6-5'} onChange={change65} />
                        <input className="textfield-6-6" id="text-6-6" name="text-6-6" placeholder={'6-6'} onChange={change66} />
                        <input className="textfield-6-7" id="text-6-7" name="text-6-7" placeholder={'6-7'} onChange={change67} />
                        <input className="textfield-6-8" id="text-6-8" name="text-6-8" placeholder={'6-8'} onChange={change68} />
                        <input className="textfield-6-9" id="text-6-9" name="text-6-9" placeholder={'6-9'} onChange={change69} />
                        <input className="textfield-6-10" id="text-6-10" name="text-6-10" placeholder={'6-10'} onChange={change610} />
                        <input className="textfield-6-11" id="text-6-11" name="text-6-11" placeholder={'6-11'} onChange={change611} />
                        <input className="textfield-6-12" id="text-6-12" name="text-6-12" placeholder={'6-12'} onChange={change612} />
                        <input className="textfield-6-13" id="text-6-13" name="text-6-13" placeholder={'6-13'} onChange={change613} />
                        <input className="textfield-6-14" id="text-6-14" name="text-6-14" placeholder={'6-14'} onChange={change614} />
                        <input className="textfield-6-15" id="text-6-15" name="text-6-15" placeholder={'6-15'} onChange={change615} />
                        <input className="textfield-6-16 external" id="text-6-16" name="text-6-16" placeholder={'6-16'} onChange={change616} />
                        <input className="textfield-6-17 external" id="text-6-17" name="text-6-17" placeholder={'6-17'} onChange={change617} />
                        <input className="textfield-6-18 external" id="text-6-18" name="text-6-18" placeholder={'6-18'} onChange={change618} />
                        <input className="textfield-6-19 external" id="text-6-19" name="text-6-19" placeholder={'6-19'} onChange={change619} />
                        <input className="textfield-6-20 external" id="text-6-20" name="text-6-20" placeholder={'6-20'} onChange={change620} />
                    </div>
                </div>
                <div className="matrix-seventh-row matrix-row">
                    <div className="row-position">7</div>
                    <div className="matrix-rows row-7">
                        <input className="textfield-7-1" id="text-7-1" name="text-7-1" placeholder={'7-1'} onChange={change71} />
                        <input className="textfield-7-2" id="text-7-2" name="text-7-2" placeholder={'7-2'} onChange={change72} />
                        <input className="textfield-7-3" id="text-7-3" name="text-7-3" placeholder={'7-3'} onChange={change73} />
                        <input className="textfield-7-4" id="text-7-4" name="text-7-4" placeholder={'7-4'} onChange={change74} />
                        <input className="textfield-7-5" id="text-7-5" name="text-7-5" placeholder={'7-5'} onChange={change75} />
                        <input className="textfield-7-6" id="text-7-6" name="text-7-6" placeholder={'7-6'} onChange={change76} />
                        <input className="textfield-7-7" id="text-7-7" name="text-7-7" placeholder={'7-7'} onChange={change77} />
                        <input className="textfield-7-8" id="text-7-8" name="text-7-8" placeholder={'7-8'} onChange={change78} />
                        <input className="textfield-7-9" id="text-7-9" name="text-7-9" placeholder={'7-9'} onChange={change79} />
                        <input className="textfield-7-10" id="text-7-10" name="text-7-10" placeholder={'7-10'} onChange={change710} />
                        <input className="textfield-7-11" id="text-7-11" name="text-7-11" placeholder={'7-11'} onChange={change711} />
                        <input className="textfield-7-12" id="text-7-12" name="text-7-12" placeholder={'7-12'} onChange={change712} />
                        <input className="textfield-7-13" id="text-7-13" name="text-7-13" placeholder={'7-13'} onChange={change713} />
                        <input className="textfield-7-14" id="text-7-14" name="text-7-14" placeholder={'7-14'} onChange={change714} />
                        <input className="textfield-7-15" id="text-7-15" name="text-7-15" placeholder={'7-15'} onChange={change715} />
                        <input className="textfield-7-16 external" id="text-7-16" name="text-7-16" placeholder={'7-16'} onChange={change716} />
                        <input className="textfield-7-17 external" id="text-7-17" name="text-7-17" placeholder={'7-17'} onChange={change717} />
                        <input className="textfield-7-18 external" id="text-7-18" name="text-7-18" placeholder={'7-18'} onChange={change718} />
                        <input className="textfield-7-19 external" id="text-7-19" name="text-7-19" placeholder={'7-19'} onChange={change719} />
                        <input className="textfield-7-20 external" id="text-7-20" name="text-7-20" placeholder={'7-20'} onChange={change720} />
                    </div>
                </div>
                <div className="matrix-eighth-row matrix-row">
                    <div className="row-position">8</div>
                    <div className="matrix-rows row-8">
                        <input className="textfield-8-1" id="text-8-1" name="text-8-1" placeholder={'8-1'} onChange={change81} />
                        <input className="textfield-8-2" id="text-8-2" name="text-8-2" placeholder={'8-2'} onChange={change82} />
                        <input className="textfield-8-3" id="text-8-3" name="text-8-3" placeholder={'8-3'} onChange={change83} />
                        <input className="textfield-8-4" id="text-8-4" name="text-8-4" placeholder={'8-4'} onChange={change84} />
                        <input className="textfield-8-5" id="text-8-5" name="text-8-5" placeholder={'8-5'} onChange={change85} />
                        <input className="textfield-8-6" id="text-8-6" name="text-8-6" placeholder={'8-6'} onChange={change86} />
                        <input className="textfield-8-7" id="text-8-7" name="text-8-7" placeholder={'8-7'} onChange={change87} />
                        <input className="textfield-8-8" id="text-8-8" name="text-8-8" placeholder={'8-8'} onChange={change88} />
                        <input className="textfield-8-9" id="text-8-9" name="text-8-9" placeholder={'8-9'} onChange={change89} />
                        <input className="textfield-8-10" id="text-8-10" name="text-8-10" placeholder={'8-10'} onChange={change810} />
                        <input className="textfield-8-11" id="text-8-11" name="text-8-11" placeholder={'8-11'} onChange={change811} />
                        <input className="textfield-8-12" id="text-8-12" name="text-8-12" placeholder={'8-12'} onChange={change812} />
                        <input className="textfield-8-13" id="text-8-13" name="text-8-13" placeholder={'8-13'} onChange={change813} />
                        <input className="textfield-8-14" id="text-8-14" name="text-8-14" placeholder={'8-14'} onChange={change814} />
                        <input className="textfield-8-15" id="text-8-15" name="text-8-15" placeholder={'8-15'} onChange={change815} />
                        <input className="textfield-8-16 external" id="text-8-16" name="text-8-16" placeholder={'8-16'} onChange={change816} />
                        <input className="textfield-8-17 external" id="text-8-17" name="text-8-17" placeholder={'8-17'} onChange={change817} />
                        <input className="textfield-8-18 external" id="text-8-18" name="text-8-18" placeholder={'8-18'} onChange={change818} />
                        <input className="textfield-8-19 external" id="text-8-19" name="text-8-19" placeholder={'8-19'} onChange={change819} />
                        <input className="textfield-8-20 external" id="text-8-20" name="text-8-20" placeholder={'8-20'} onChange={change820} />
                    </div>
                </div>
                <div className="matrix-ninth-row matrix-row">
                    <div className="row-position">9</div>
                    <div className="matrix-rows row-9">
                        <input className="textfield-9-1" id="text-9-1" name="text-9-1" placeholder={'9-1'} onChange={change91} />
                        <input className="textfield-9-2" id="text-9-2" name="text-9-2" placeholder={'9-2'} onChange={change92} />
                        <input className="textfield-9-3" id="text-9-3" name="text-9-3" placeholder={'9-3'} onChange={change93} />
                        <input className="textfield-9-4" id="text-9-4" name="text-9-4" placeholder={'9-4'} onChange={change94} />
                        <input className="textfield-9-5" id="text-9-5" name="text-9-5" placeholder={'9-5'} onChange={change95} />
                        <input className="textfield-9-6" id="text-9-6" name="text-9-6" placeholder={'9-6'} onChange={change96} />
                        <input className="textfield-9-7" id="text-9-7" name="text-9-7" placeholder={'9-7'} onChange={change97} />
                        <input className="textfield-9-8" id="text-9-8" name="text-9-8" placeholder={'9-8'} onChange={change98} />
                        <input className="textfield-9-9" id="text-9-9" name="text-9-9" placeholder={'9-9'} onChange={change99} />
                        <input className="textfield-9-10" id="text-9-10" name="text-9-10" placeholder={'9-10'} onChange={change910} />
                        <input className="textfield-9-11" id="text-9-11" name="text-9-11" placeholder={'9-11'} onChange={change911} />
                        <input className="textfield-9-12" id="text-9-12" name="text-9-12" placeholder={'9-12'} onChange={change912} />
                        <input className="textfield-9-13" id="text-9-13" name="text-9-13" placeholder={'9-13'} onChange={change913} />
                        <input className="textfield-9-14" id="text-9-14" name="text-9-14" placeholder={'9-14'} onChange={change914} />
                        <input className="textfield-9-15" id="text-9-15" name="text-9-15" placeholder={'9-15'} onChange={change915} />
                        <input className="textfield-9-16 external" id="text-9-16" name="text-9-16" placeholder={'9-16'} onChange={change916} />
                        <input className="textfield-9-17 external" id="text-9-17" name="text-9-17" placeholder={'9-17'} onChange={change917} />
                        <input className="textfield-9-18 external" id="text-9-18" name="text-9-18" placeholder={'9-18'} onChange={change918} />
                        <input className="textfield-9-19 external" id="text-9-19" name="text-9-19" placeholder={'9-19'} onChange={change919} />
                        <input className="textfield-9-20 external" id="text-9-20" name="text-9-20" placeholder={'9-20'} onChange={change920} />
                    </div>
                </div>
                <div className="matrix-v-row matrix-row">
                    <div className="row-position">v</div>
                    <div className="matrix-rows row-v1">
                        <input className="textfield-v-1 external-v" id="text-v-1" name="text-v-1" placeholder={'v-1'} value={resultText1x1} />
                        <input className="textfield-v-2 external-v" id="text-v-2" name="text-v-2" placeholder={'v-2'} value={resultText2x1} />
                        <input className="textfield-v-3 external-v" id="text-v-3" name="text-v-3" placeholder={'v-3'} value={resultText3x1} />
                        <input className="textfield-v-4 external-v" id="text-v-4" name="text-v-4" placeholder={'v-4'} value={resultText4x1} />
                        <input className="textfield-v-5 external-v" id="text-v-5" name="text-v-5" placeholder={'v-5'} value={resultText5x1} />
                        <input className="textfield-v-6 external-v" id="text-v-6" name="text-v-6" placeholder={'v-6'} value={resultText6x1} />
                        <input className="textfield-v-7 external-v" id="text-v-7" name="text-v-7" placeholder={'v-7'} value={resultText7x1} />
                        <input className="textfield-v-8 external-v" id="text-v-8" name="text-v-8" placeholder={'v-8'} value={resultText8x1} />
                        <input className="textfield-v-9 external-v" id="text-v-9" name="text-v-9" placeholder={'v-9'} value={resultText9x1} />
                        <input className="textfield-v-10 external-v" id="text-v-10" name="text-v-10" placeholder={'v-10'} value={resultText10x1} />
                        <input className="textfield-v-11 external-v" id="text-v-11" name="text-v-11" placeholder={'v-11'} value={resultText11x1} />
                        <input className="textfield-v-12 external-v" id="text-v-12" name="text-v-12" placeholder={'v-12'} value={resultText12x1} />
                        <input className="textfield-v-13 external-v" id="text-v-13" name="text-v-13" placeholder={'v-13'} value={resultText13x1} />
                        <input className="textfield-v-14 external-v" id="text-v-14" name="text-v-14" placeholder={'v-14'} value={resultText14x1} />
                        <input className="textfield-v-15 external-v" id="text-v-15" name="text-v-15" placeholder={'v-15'} value={resultText15x1} />
                        <input className="textfield-v-16 external-v" id="text-v-16" name="text-v-16" placeholder={'v-16'} value={resultText16x1} />
                        <input className="textfield-v-17 external-v" id="text-v-17" name="text-v-17" placeholder={'v-17'} value={resultText17x1} />
                        <input className="textfield-v-18 external-v" id="text-v-18" name="text-v-18" placeholder={'v-18'} value={resultText18x1} />
                        <input className="textfield-v-19 external-v" id="text-v-19" name="text-v-19" placeholder={'v-19'} value={resultText19x1} />
                        <input className="textfield-v-20 external-v" id="text-v-20" name="text-v-20" placeholder={'v-20'} value={resultText20x1} />
                    </div>
                </div>
                <div className="matrix-v-row matrix-row">
                    <div className="row-position">v</div>
                    <div className="matrix-rows row-v2">
                        <input className="textfield-v-1 external-v" id="text-v-1" name="text-v-1" placeholder={'v-1'} value={resultText1x2} />
                        <input className="textfield-v-2 external-v" id="text-v-2" name="text-v-2" placeholder={'v-2'} value={resultText2x2} />
                        <input className="textfield-v-3 external-v" id="text-v-3" name="text-v-3" placeholder={'v-3'} value={resultText3x2} />
                        <input className="textfield-v-4 external-v" id="text-v-4" name="text-v-4" placeholder={'v-4'} value={resultText4x2} />
                        <input className="textfield-v-5 external-v" id="text-v-5" name="text-v-5" placeholder={'v-5'} value={resultText5x2} />
                        <input className="textfield-v-6 external-v" id="text-v-6" name="text-v-6" placeholder={'v-6'} value={resultText6x2} />
                        <input className="textfield-v-7 external-v" id="text-v-7" name="text-v-7" placeholder={'v-7'} value={resultText7x2} />
                        <input className="textfield-v-8 external-v" id="text-v-8" name="text-v-8" placeholder={'v-8'} value={resultText8x2} />
                        <input className="textfield-v-9 external-v" id="text-v-9" name="text-v-9" placeholder={'v-9'} value={resultText9x2} />
                        <input className="textfield-v-10 external-v" id="text-v-10" name="text-v-10" placeholder={'v-10'} value={resultText10x2} />
                        <input className="textfield-v-11 external-v" id="text-v-11" name="text-v-11" placeholder={'v-11'} value={resultText11x2} />
                        <input className="textfield-v-12 external-v" id="text-v-12" name="text-v-12" placeholder={'v-12'} value={resultText12x2} />
                        <input className="textfield-v-13 external-v" id="text-v-13" name="text-v-13" placeholder={'v-13'} value={resultText13x2} />
                        <input className="textfield-v-14 external-v" id="text-v-14" name="text-v-14" placeholder={'v-14'} value={resultText14x2} />
                        <input className="textfield-v-15 external-v" id="text-v-15" name="text-v-15" placeholder={'v-15'} value={resultText15x2} />
                        <input className="textfield-v-16 external-v" id="text-v-16" name="text-v-16" placeholder={'v-16'} value={resultText16x2} />
                        <input className="textfield-v-17 external-v" id="text-v-17" name="text-v-17" placeholder={'v-17'} value={resultText17x2} />
                        <input className="textfield-v-18 external-v" id="text-v-18" name="text-v-18" placeholder={'v-18'} value={resultText18x2} />
                        <input className="textfield-v-19 external-v" id="text-v-19" name="text-v-19" placeholder={'v-19'} value={resultText19x2} />
                        <input className="textfield-v-20 external-v" id="text-v-20" name="text-v-20" placeholder={'v-20'} value={resultText20x2} />
                    </div>
                </div>
                <div className="matrix-v-row matrix-row">
                    <div className="row-position">v</div>
                    <div className="matrix-rows row-v3">
                        <input className="textfield-v-1 external-v" id="text-v-1" name="text-v-1" placeholder={'v-1'} value={resultText1x3} />
                        <input className="textfield-v-2 external-v" id="text-v-2" name="text-v-2" placeholder={'v-2'} value={resultText2x3} />
                        <input className="textfield-v-3 external-v" id="text-v-3" name="text-v-3" placeholder={'v-3'} value={resultText3x3} />
                        <input className="textfield-v-4 external-v" id="text-v-4" name="text-v-4" placeholder={'v-4'} value={resultText4x3} />
                        <input className="textfield-v-5 external-v" id="text-v-5" name="text-v-5" placeholder={'v-5'} value={resultText5x3} />
                        <input className="textfield-v-6 external-v" id="text-v-6" name="text-v-6" placeholder={'v-6'} value={resultText6x3} />
                        <input className="textfield-v-7 external-v" id="text-v-7" name="text-v-7" placeholder={'v-7'} value={resultText7x3} />
                        <input className="textfield-v-8 external-v" id="text-v-8" name="text-v-8" placeholder={'v-8'} value={resultText8x3} />
                        <input className="textfield-v-9 external-v" id="text-v-9" name="text-v-9" placeholder={'v-9'} value={resultText9x3} />
                        <input className="textfield-v-10 external-v" id="text-v-10" name="text-v-10" placeholder={'v-10'} value={resultText10x3} />
                        <input className="textfield-v-11 external-v" id="text-v-11" name="text-v-11" placeholder={'v-11'} value={resultText11x3} />
                        <input className="textfield-v-12 external-v" id="text-v-12" name="text-v-12" placeholder={'v-12'} value={resultText12x3} />
                        <input className="textfield-v-13 external-v" id="text-v-13" name="text-v-13" placeholder={'v-13'} value={resultText13x3} />
                        <input className="textfield-v-14 external-v" id="text-v-14" name="text-v-14" placeholder={'v-14'} value={resultText14x3} />
                        <input className="textfield-v-15 external-v" id="text-v-15" name="text-v-15" placeholder={'v-15'} value={resultText15x3} />
                        <input className="textfield-v-16 external-v" id="text-v-16" name="text-v-16" placeholder={'v-16'} value={resultText16x3} />
                        <input className="textfield-v-17 external-v" id="text-v-17" name="text-v-17" placeholder={'v-17'} value={resultText17x3} />
                        <input className="textfield-v-18 external-v" id="text-v-18" name="text-v-18" placeholder={'v-18'} value={resultText18x3} />
                        <input className="textfield-v-19 external-v" id="text-v-19" name="text-v-19" placeholder={'v-19'} value={resultText19x3} />
                        <input className="textfield-v-20 external-v" id="text-v-20" name="text-v-20" placeholder={'v-20'} value={resultText20x3} />
                    </div>
                </div>
                <div className="matrix-v-row matrix-row">
                    <div className="row-position">v</div>
                    <div className="matrix-rows row-v4">
                        <input className="textfield-v-1 external-v" id="text-v-1" name="text-v-1" placeholder={'v-1'} value={resultText1x4} />
                        <input className="textfield-v-2 external-v" id="text-v-2" name="text-v-2" placeholder={'v-2'} value={resultText2x4} />
                        <input className="textfield-v-3 external-v" id="text-v-3" name="text-v-3" placeholder={'v-3'} value={resultText3x4} />
                        <input className="textfield-v-4 external-v" id="text-v-4" name="text-v-4" placeholder={'v-4'} value={resultText4x4} />
                        <input className="textfield-v-5 external-v" id="text-v-5" name="text-v-5" placeholder={'v-5'} value={resultText5x4} />
                        <input className="textfield-v-6 external-v" id="text-v-6" name="text-v-6" placeholder={'v-6'} value={resultText6x4} />
                        <input className="textfield-v-7 external-v" id="text-v-7" name="text-v-7" placeholder={'v-7'} value={resultText7x4} />
                        <input className="textfield-v-8 external-v" id="text-v-8" name="text-v-8" placeholder={'v-8'} value={resultText8x4} />
                        <input className="textfield-v-9 external-v" id="text-v-9" name="text-v-9" placeholder={'v-9'} value={resultText9x4} />
                        <input className="textfield-v-10 external-v" id="text-v-10" name="text-v-10" placeholder={'v-10'} value={resultText10x4} />
                        <input className="textfield-v-11 external-v" id="text-v-11" name="text-v-11" placeholder={'v-11'} value={resultText11x4} />
                        <input className="textfield-v-12 external-v" id="text-v-12" name="text-v-12" placeholder={'v-12'} value={resultText12x4} />
                        <input className="textfield-v-13 external-v" id="text-v-13" name="text-v-13" placeholder={'v-13'} value={resultText13x4} />
                        <input className="textfield-v-14 external-v" id="text-v-14" name="text-v-14" placeholder={'v-14'} value={resultText14x4} />
                        <input className="textfield-v-15 external-v" id="text-v-15" name="text-v-15" placeholder={'v-15'} value={resultText15x4} />
                        <input className="textfield-v-16 external-v" id="text-v-16" name="text-v-16" placeholder={'v-16'} value={resultText16x4} />
                        <input className="textfield-v-17 external-v" id="text-v-17" name="text-v-17" placeholder={'v-17'} value={resultText17x4} />
                        <input className="textfield-v-18 external-v" id="text-v-18" name="text-v-18" placeholder={'v-18'} value={resultText18x4} />
                        <input className="textfield-v-19 external-v" id="text-v-19" name="text-v-19" placeholder={'v-19'} value={resultText19x4} />
                        <input className="textfield-v-20 external-v" id="text-v-20" name="text-v-20" placeholder={'v-20'} value={resultText20x4} />
                    </div>
                </div>
                <button onClick={doCheckBtnHandler}>Do vertical check</button>
                <button onClick={getMatrixFromHorizontal}>Get data from horizonal</button>
            </div>
        </div>
    );
};

export default VerticalCheck;
