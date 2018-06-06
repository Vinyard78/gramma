{
	"valeur": "(.*?)",
	"genre": "(.*?)",
	"nombre": "(.*?)",
	"catgram": "(.*?)",
	"origine": "(.*?)",
	"indicateur":
		[
			"(.*?)",
			...
		],
	"remarque":
		[
			"(.*?)",
			...
		],
	"abreviation":
		[
			{
				"valeur": "(.*?)",
				"remarque":
					[
						"(.*?)",
						...
					]
			},
			...
		],
	"definitions":
		[
			{
				"textePresentatif": "(.*?)",
				"division":
					[
						{
							"rubrique": "(.*?)",
							"sousDivision":
								[
									{
										"contenu": 
											[
												{
													"texte": "(.*?)",
													"exemples":
														[
															"(.*?)",
															...
														],
													"images":
														[
															"(.*?).gif",
															...
														]
												}
											],
										"indicateur":
											[
												"(.*?)",
												...
											]
									},
									...
								],
							"contenu": 
								[
									{
										"texte": "(.*?)",
										"images":
											[
												"(.*?).gif",
												...
											],
										"exemples":
											[
												"(.*?)",
												...
											]
									},
									...
								],
							"abreviation":
								[
									{
										"valeur": "(.*?)",
										"remarque": 
											[
												"(.*?)",
												...
											]
									},
									...
								],
							"indicateur":
								[
									"(.*?)",
									...
								]
						},
						...
					]
			},
			...
		],
	"references": {
		"forme": ([0-9]),
		"orthographe": ([0-9]),
		"variante": ([0-9]),
		"motRef": "(.*?)"
	}
}