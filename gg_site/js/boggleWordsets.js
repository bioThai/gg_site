//bioThai
//Script for retrieving word sets for Boggle game. This script is based on a pre-made script from a course textbook and is in need of overhaul.

function words(x)
{
	switch (x)
    {      
        case 1:
            var word = new Array("balte","table","hat","tab","belt","lab","eat","tea","ate","tale","bale","let","bet","teal","late","beat", "bleat", "bat", "ale", "at", "a", "be", "bate", "ab");
            break;		
        case 2:
            var word = new Array("atwre","water","wet","wear","tear","war","ret","rate","eat","ate","tea","awe","raw","rat","wart","art","tar", "ware", "at", "a", "are");
            break;
        case 3:
            var word = new Array("dclaen","can","cane", "caned", "and","clan","lane","lean","lead","lend","land","den","dean","dane","dance","lace","lance","clean","deal","ale","dale","candle","clad", "clade", "lad", "ace", "an", "a", "ad", "aced");
            break;
        case 4:
            var word = new Array("aepinlar","air","airplane","plane","plan","lane","lean","pane", "panel", "ear", "near", "nap", "nape", "lair", "pen", "pan", "ape", "leap", "ale", "peal", "nap", "rap", "par", "pare", "pale", "are", "rain", "rail", "ail", "pail", "nail", "nil", "pair", "ran", "pin", "pine", "line", "nip", "rip", "ripe", "lip", "earn", "learn", "ire", "planar", "an", "a", "i", "pea", "pear", "pearl", "earl", "linear", "alp", "alpine", "pain", "renal", "anal", "pal", "lap", "reap", "rape", "plain", "rein", "pineal", "praline", "paean", "pie", "pier", "prana", "real", "in");
            break;
        case 5:
            var word = new Array("redykboa","keyboard","key","board","bored","bore","bark","dark","dork","oar","boar","ark","dare","bare","bared","are","red","rod","road","bode","rode","ode","bread", "bready", "read", "bead", "beady", "bred", "break", "drey", "day", "boy", "broke", "brake", "braked", "rake", "raked", "bake", "ear", "dear", "bear", "dye", "dyer", "doer", "oak", "boa", "doe", "okay", "okayed", "dab", "bade", "ade", "drake", "bard", "yard", "year", "beak", "beaky", "beard", "bad", "bed", "bay", "bayed", "by", "bye", "a", "drab", "bray", "brayed", "ab", "ready", "baker", "bakery", "baked", "ado", "adore", "aye", "ray", "rayed", "bar", "rye");
            break;
        case 6:
            var word = new Array("balrve", "verbal", "abler", "baler", "blare", "blear", "brave", "laver", "ravel", "velar", "able", "aver", "bale", "bare", "bear", "blae", "brae", "earl", "lave", "lear", "leva", "rale", "rave", "real", "vale", "veal", "vela", "vera", "verb", "ale", "are", "arb", "ave", "bar", "bra", "ear", "era", "lab", "ab", "be", "a");
            break;
        case 7:
            var word = new Array("dcroe", "credo", "coder", "cored", "decor", "code", "coed", "cord", "core", "cred", "deco", "doer", "dore", "redo", "rode", "cod", "doc", "doe", "ode", "orc", "ore", "rec", "red", "rod", "roe", "do", "or");
            break;
        case 8:
            var word = new Array("nksis", "sinks", "skins", "inks", "kins", "kiss", "sink", "sins", "skin", "skis", "ink", "ins", "kin", "sin", "sis", "ski", "in", "is", "ki", "i");
            break;
	}
	return word;
}
