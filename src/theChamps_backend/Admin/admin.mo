import Principal "mo:base/Principal";
import Array "mo:base/Array";
import Text "mo:base/Text";
module {

    private let adminPrincipals : [Text] = [
        "7yywi-leri6-n33rr-vskr6-yb4nd-dvj6j-xg2b4-reiw6-dljs7-slclz-2ae",
        "jkssc-r7bft-rhxnv-xskty-gwy2y-nabjd-asvau-ijwcf-nyvbq-dcazp-zae",
        "h7yxq-n6yb2-6js2j-af5hk-h4inj-edrce-oevyj-kbs7a-76kft-vrqrw-nqe",
        "uktss-xp5gu-uwif5-hfpwu-rujms-foroa-4zdkd-ofspf-uqqre-wxqyj-cqe",
        "5gojq-7zyol-kqpfn-vett2-e6at4-2wmg5-wyshc-ptyz3-t7pos-okakd-7qe",
        "mmi6f-vbi3x-r3ytg-dath5-qfi5s-rbq3r-75avw-q3ele-ajsft-llzwc-dae",
        "smvf5-lswfz-4usiy-h4u2e-e56bp-ai2f2-kuxmr-62gd4-7ezqk-ueb4f-sqe",
        "sl32w-hllt3-z3pqn-xpgn7-nkzvc-s6gp3-2bbge-jcvqz-boled-uvowo-dqe",
        "qlmrg-xxhxr-2kxys-5kax6-ijfvm-odhit-xdlbv-sab73-b5hy2-rby5u-wae"
    ];

    public func isAdmin(userPrincipal : Principal) : async Bool {
        let userPrincipalStr = Principal.toText(userPrincipal);
        let foundAdmin = Array.find<Text>(
            adminPrincipals,
            func(adminPrincipal : Text) : Bool {
                return userPrincipalStr == adminPrincipal;
            },
        );
        switch (foundAdmin) {
            case (null) { return false };
            case (?v) { return true };
        };
    };

}