grammar Furumai;

story
  : config? ';'? layout ( '---' update )* '---'? EOF
  ;
config
  : 'config' '{' declaration? ( ';' declaration )* ';'? '}'
  ;
layout
  : stmt_list
  ;
update
  : stmt_list
  ;

stmt_list
  : stmt ( ';' stmt )* ';'?
  ;

stmt
  : group
  | zone
  | node_stmt
  | edge_stmt
  | hide
  | declaration
  | style
  ;

group
  : 'group' ID '{' stmt_list '}'
  ;

zone
  : 'zone' ID '{' stmt_list '}'
  ;

node_stmt
  : ID attr_list?
  ;

edge_stmt
  : ID EDGEOP ID attr_list?
  ;

hide
  : hide_elem
  | hide_edge
  ;

hide_elem
  : 'hide' ID
  ;

hide_edge
  : 'hide' ID EDGEOP ID
  ;

attr_list
  : '[' declaration ( ( ',' | ';' )?  declaration )* ( ',' | ';' )? ']'
  ;

style
  : 'style' '{' css_stmt* '}'
  ;

css_stmt
  : selector_list '{' declaration? ( ';' declaration )* ';'? '}'
  ;

selector_list
  : selector ( ',' selector )* ','?
  ;

selector
  : combined_selector* basic_selector
  ;

combined_selector
  : basic_selector combinator?
  ;

combinator
  : '>'
  ;

basic_selector
  : univ_selector
  | type_selector
  | class_selector
  | id_selector
  | edge_selector
  ;

univ_selector
  : '*'
  ;
type_selector
  : ID
  ;
class_selector
  : DOT
  ;
id_selector
  : HASH
  ;
edge_selector
  : ID EDGEOP ID
  ;

declaration
  : ID ( ':' | '=' ) val+
  ;

val
  : STRING
  | ID
  | HASH
  ;

ID
  : [a-zA-Z_0-9]+ ('-' [a-zA-Z_0-9]+)*
  ;

HASH
  : '#' ID
  ;

DOT
  : '.' ID
  ;

STRING
  : '\'' ( ~'\'' )* '\'' { this.text = this.text.slice(1, -1)}
  | '"' ( ~'"' )* '"' { this.text = this.text.slice(1, -1) }
  ;

EDGEOP
  : '--'
  | '->'
  ;

SPACES
  : [ \u000B\t\r\n] -> channel(HIDDEN)
  ;

SINGLE_LINE_COMMENT
  : '//' ( ~('\r' | '\n') )* ('\r' | '\n' | EOF) -> channel(HIDDEN)
  ;
